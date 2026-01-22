/**
 * SmilePro Utilities & Helpers
 * Provides safe wrappers and shared logic.
 */

const Utils = {
    // --- 1. Safe LocalStorage Wrapper ---
    storage: {
        set(key, value) {
            try {
                const stringValue = JSON.stringify(value);
                localStorage.setItem(key, stringValue);
                return true;
            } catch (e) {
                console.error('LocalStorage Write Error:', e);
                // Optional: Notify user if storage is full
                if (window.customAlert) {
                    customAlert('Storage is full or unavailable. Changes might not be saved.', 'System Error');
                }
                return false;
            }
        },
        get(key) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            } catch (e) {
                console.error('LocalStorage Read Error:', e);
                return null;
            }
        },
        remove(key) {
            localStorage.removeItem(key);
        }
    },

    // --- 2. Mock Session System ---
    auth: {
        login() {
            storage.set('smilepro_session', {
                active: true,
                timestamp: Date.now(),
                user: 'Dr. Islam'
            });
        },
        logout() {
            localStorage.removeItem('smilepro_session');
            window.location.href = 'login.html';
        },
        checkAccess() {
            const session = storage.get('smilepro_session');
            if (!session || !session.active) {
                // Not authorized
                document.body.innerHTML = `
                    <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: sans-serif; background: #f8fafc; color: #1e293b;">
                        <i class="fa-solid fa-lock" style="font-size: 3rem; color: #ef4444; margin-bottom: 20px;"></i>
                        <h1 style="margin-bottom: 10px;">Access Denied</h1>
                        <p>You must be logged in to access this area.</p>
                        <a href="login.html" style="margin-top: 20px; padding: 10px 20px; background: #0e8af0; color: white; text-decoration: none; border-radius: 8px;">Go to Login</a>
                    </div>
                `;
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
                return false;
            }
            return true;
        }
    },

    // --- 3. UI Helpers ---
    showLoading(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        container.classList.add('loading-state');
        const loader = document.createElement('div');
        loader.className = 'skeleton-loader-overlay';
        loader.innerHTML = `
            <div class="spinner"></div>
            <p>Processing data...</p>
        `;
        container.appendChild(loader);
    },

    hideLoading(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        container.classList.remove('loading-state');
        const loader = container.querySelector('.skeleton-loader-overlay');
        if (loader) loader.remove();
    }
};

// Aliasing for convenience
const storage = Utils.storage;
const auth = Utils.auth;
