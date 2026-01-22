/**
 * SmilePro Premium Admin Dashboard Logic
 * Advanced features: Fake data simulation, dynamic stats, CMS live-sync.
 */

// --- Global CMS Functions (Exposed for onclick handlers) ---
window.triggerSave = function () {
    const btn = document.querySelector('.page-header .btn-primary');
    if (!btn) return;

    const originalHtml = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Syncing to Website...`;
    btn.disabled = true;

    const data = {};
    document.querySelectorAll('.cms-input').forEach(input => {
        data[input.id] = input.value;
    });

    // Simulate Server Synchronization
    setTimeout(() => {
        const success = storage.set('smilepro_content', data);
        btn.innerHTML = originalHtml;
        btn.disabled = false;

        if (success) {
            document.getElementById('save-bar')?.classList.remove('visible');
            if (window.showToast) showToast('Website content updated successfully!', 'success');
        } else {
            if (window.showToast) showToast('Failed to save changes. Storage error.', 'error');
        }
    }, 1500);
}

window.triggerUnsavedChanges = function () {
    document.getElementById('save-bar')?.classList.add('visible');
}

document.addEventListener('DOMContentLoaded', () => {
    // Security check logic is handled in HTML script for immediate block

    // --- 1. Dashboard Module ---
    if (document.getElementById('stat-patients')) {
        initDashboard();
    }

    // --- 2. Appointments Module ---
    if (document.getElementById('appointments-body')) {
        renderFullAppointments();
        setupSearchFilters();
    }

    // --- 3. Patients Module ---
    if (document.getElementById('patients-body')) {
        renderPatientsList();
        setupSearchFilters();
    }

    // --- 4. CMS Module ---
    if (document.querySelector('.cms-grid')) {
        loadCMSContent();
        setupCMSListeners();
    }
});

// --- DASHBOARD MODULE ---
function initDashboard() {
    Utils.showLoading('.main-content');

    setTimeout(() => {
        const bookings = storage.get('smilepro_bookings') || [];
        Utils.hideLoading('.main-content');

        // Stats Logic
        const today = new Date().toISOString().split('T')[0];
        const appointmentsToday = bookings.filter(b => b.date === today).length;
        const totalPatients = new Set(bookings.map(b => b.phone)).size + 1242; // Simulated base
        const pending = bookings.filter(b => b.status === 'Pending').length;
        const revenue = bookings.reduce((sum, b) => sum + 150, 0) + 48200; // Simulating $150 per booking

        updateStatEl('stat-today', appointmentsToday);
        updateStatEl('stat-patients', totalPatients.toLocaleString());
        updateStatEl('stat-pending', pending);
        updateStatEl('stat-revenue', '$' + revenue.toLocaleString());

        renderRecentTable(bookings);
    }, 800);
}

function renderRecentTable(bookings) {
    const tbody = document.querySelector('.table-container tbody');
    if (!tbody || !document.getElementById('stat-patients')) return; // Only on dashboard

    const items = [...bookings].reverse().slice(0, 5);
    tbody.innerHTML = items.length ? '' : '<tr><td colspan="6" style="text-align:center; padding: 40px;">No recent activity.</td></tr>';

    items.forEach(b => {
        const tr = document.createElement('tr');
        tr.className = 'fade-in-row';
        tr.innerHTML = `
            <td>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div class="user-avatar" style="background: rgba(13, 110, 253, 0.1); color: var(--primary);">${b.name.charAt(0)}</div>
                    <div style="font-weight: 600;">${b.name}</div>
                </div>
            </td>
            <td>${b.service}</td>
            <td>
                <div style="font-weight: 500;">${b.date}</div>
                <div style="font-size: 0.8rem; color: var(--primary);">${b.time}</div>
            </td>
            <td>${b.phone}</td>
            <td><span class="status-badge ${getStatusBadgeClass(b.status)}">${b.status}</span></td>
            <td><button class="action-btn" onclick="openDetails('${b.id}')"><i class="fa-solid fa-chevron-right"></i></button></td>
        `;
        tbody.appendChild(tr);
    });
}

// --- APPOINTMENTS MODULE ---
function renderFullAppointments() {
    const tbody = document.getElementById('appointments-body');
    if (!tbody) return;

    let bookings = storage.get('smilepro_bookings') || [];
    const searchTerm = document.getElementById('appointment-search')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('status-filter')?.value || 'All Statuses';

    // Apply Filters
    if (searchTerm) {
        bookings = bookings.filter(b =>
            b.name.toLowerCase().includes(searchTerm) ||
            b.phone.includes(searchTerm) ||
            b.service.toLowerCase().includes(searchTerm)
        );
    }
    if (statusFilter !== 'All Statuses') {
        bookings = bookings.filter(b => b.status === statusFilter);
    }

    tbody.innerHTML = bookings.length ? '' : '<tr><td colspan="6" style="text-align:center; padding: 40px;">No bookings found.</td></tr>';

    bookings.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(b => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><div style="display: flex; align-items: center; gap: 10px;">
                <div class="user-avatar" style="width: 32px; height: 32px; font-size: 0.7rem;">${b.name.charAt(0)}</div>
                <strong>${b.name}</strong>
            </div></td>
            <td>${b.service}</td>
            <td><span class="text-primary" style="font-weight: 600;">${b.date}</span><br><small>${b.time}</small></td>
            <td>${b.phone}</td>
            <td>
                <select class="form-control-sm" onchange="updateBookingStatus('${b.id}', this.value)" style="border: 1px solid #e2e8f0; background: white; border-radius: 8px; padding: 5px 10px; cursor: pointer;">
                    <option ${b.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option ${b.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                    <option ${b.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                    <option ${b.status === 'Completed' ? 'selected' : ''}>Completed</option>
                </select>
            </td>
            <td>
                <div style="display: flex; gap: 8px;">
                    <button class="action-btn" onclick="openDetails('${b.id}')"><i class="fa-solid fa-pen"></i></button>
                    <button class="action-btn text-danger" onclick="deleteEntry('${b.id}', 'bookings')"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// --- PATIENTS MODULE ---
function renderPatientsList() {
    const tbody = document.getElementById('patients-body');
    if (!tbody) return;

    const bookings = storage.get('smilepro_bookings') || [];
    const searchTerm = document.getElementById('patient-search')?.value.toLowerCase() || '';

    // Group unique patients
    const patients = {};
    bookings.forEach(b => {
        const key = b.phone;
        if (!patients[key]) {
            patients[key] = { name: b.name, phone: b.phone, visits: 0, last: b.date, id: b.id };
        }
        patients[key].visits++;
        if (new Date(b.date) > new Date(patients[key].last)) patients[key].last = b.date;
    });

    let list = Object.values(patients);

    // Search Filter
    if (searchTerm) {
        list = list.filter(p => p.name.toLowerCase().includes(searchTerm) || p.phone.includes(searchTerm));
    }

    tbody.innerHTML = list.length ? '' : '<tr><td colspan="5" style="text-align:center; padding: 40px;">No patients found matching criteria.</td></tr>';

    list.sort((a, b) => new Date(b.last) - new Date(a.last)).forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div class="user-avatar" style="background: #f1f5f9; color: var(--primary); font-size: 0.75rem;">${p.name.charAt(0)}</div>
                    <strong>${p.name}</strong>
                </div>
            </td>
            <td>${p.phone}</td>
            <td><span class="badge" style="background: rgba(13, 110, 253, 0.1); color: var(--primary); padding: 5px 12px; border-radius: 20px; font-weight: 600;">${p.visits} Visits</span></td>
            <td>${p.last}</td>
            <td><button class="btn btn-outline" style="padding: 6px 15px; font-size: 0.8rem;" onclick="viewHistory('${p.phone}')">View History</button></td>
        `;
        tbody.appendChild(tr);
    });
}

// --- CMS MODULE ---
function loadCMSContent() {
    const data = storage.get('smilepro_content');
    if (data) {
        Object.keys(data).forEach(key => {
            const el = document.getElementById(key);
            if (el) el.value = data[key];
        });
    }
}

function setupCMSListeners() {
    document.querySelectorAll('.cms-input').forEach(input => {
        input.addEventListener('input', triggerUnsavedChanges);
    });
}

// --- SEARCH & FILTERS ---
function setupSearchFilters() {
    const appSearch = document.getElementById('appointment-search');
    const statusFilter = document.getElementById('status-filter');
    const patSearch = document.getElementById('patient-search');

    if (appSearch) appSearch.addEventListener('input', renderFullAppointments);
    if (statusFilter) statusFilter.addEventListener('change', renderFullAppointments);
    if (patSearch) patSearch.addEventListener('input', renderPatientsList);
}

// --- MODAL LOGIC ---
window.openDetails = function (id) {
    const bookings = storage.get('smilepro_bookings') || [];
    const booking = bookings.find(b => b.id === id);
    if (!booking) return;

    const modal = document.getElementById('edit-modal');
    if (!modal) return;

    document.getElementById('edit-booking-id').value = booking.id;
    document.getElementById('edit-name').value = booking.name;
    document.getElementById('edit-service').value = booking.service;
    document.getElementById('edit-date').value = booking.date;
    document.getElementById('edit-time').value = booking.time;

    modal.classList.add('active');
}

window.closeEditModal = function () {
    const modal = document.getElementById('edit-modal');
    if (modal) modal.classList.remove('active');
}

window.saveBookingChanges = function (e) {
    e.preventDefault();
    const id = document.getElementById('edit-booking-id').value;
    const bookings = storage.get('smilepro_bookings') || [];
    const idx = bookings.findIndex(b => b.id === id);

    if (idx !== -1) {
        bookings[idx].name = document.getElementById('edit-name').value;
        bookings[idx].service = document.getElementById('edit-service').value;
        bookings[idx].date = document.getElementById('edit-date').value;
        bookings[idx].time = document.getElementById('edit-time').value;

        storage.set('smilepro_bookings', bookings);
        if (window.showToast) showToast('Booking updated successfully!', 'success');
        closeEditModal();

        // Refresh contexts
        if (document.getElementById('appointments-body')) renderFullAppointments();
        if (document.getElementById('stat-patients')) initDashboard();
    }
}

window.viewHistory = function (phone) {
    if (window.showToast) showToast(`Loading history for ${phone}...`, 'info');
    // For now, just filter the appointment list if we're on that page, or redirect
    localStorage.setItem('smilepro_search_temp', phone);
    window.location.href = 'appointments.html';
}

// --- GLOBAL HELPERS ---
function updateStatEl(id, val) {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
}

function getStatusBadgeClass(status) {
    if (status === 'Confirmed') return 'status-confirmed';
    if (status === 'Pending') return 'status-pending';
    if (status === 'Cancelled') return 'status-cancelled';
    if (status === 'Completed') return 'status-completed';
    return '';
}

window.updateBookingStatus = function (id, status) {
    const bookings = storage.get('smilepro_bookings') || [];
    const booking = bookings.find(b => b.id === id);
    if (booking) {
        booking.status = status;
        storage.set('smilepro_bookings', bookings);
        if (window.showToast) showToast(`Appointment mark as ${status}`, 'success');

        if (document.getElementById('appointments-body')) renderFullAppointments();
        if (document.getElementById('stat-patients')) initDashboard();
    }
}

window.deleteEntry = async function (id, type) {
    if (!(await customConfirm('Are you sure you want to permanently delete this?'))) return;

    const key = `smilepro_${type}`;
    const data = storage.get(key) || [];
    storage.set(key, data.filter(item => item.id !== id));

    if (window.showToast) showToast('Removed successfully.', 'info');

    if (document.getElementById('appointments-body')) renderFullAppointments();
    if (document.getElementById('patients-body')) renderPatientsList();
    if (document.getElementById('stat-patients')) initDashboard();
}

// Handle temp search from patients page
if (localStorage.getItem('smilepro_search_temp')) {
    const term = localStorage.getItem('smilepro_search_temp');
    localStorage.removeItem('smilepro_search_temp');
    setTimeout(() => {
        const input = document.getElementById('appointment-search');
        if (input) {
            input.value = term;
            renderFullAppointments();
        }
    }, 100);
}
w i n d o w . a d d N e w P a t i e n t   =   f u n c t i o n ( )   {   i f   ( w i n d o w . s h o w T o a s t )   s h o w T o a s t ( ' R e d i r e c t i n g   t o   m a n u a l   b o o k i n g . . . ' ,   ' i n f o ' ) ;   s e t T i m e o u t ( ( )   = >   {   w i n d o w . l o c a t i o n . h r e f   =   ' i n d e x . h t m l # b o o k i n g ' ;   } ,   8 0 0 ) ;   }  
 