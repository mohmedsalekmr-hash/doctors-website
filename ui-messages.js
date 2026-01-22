/**
 * SmilePro Custom UI Message System
 * Replaces native alert(), confirm(), and prompt() with professional UI components.
 */

const UIMessage = {
    // Shared container for modals
    getContainer() {
        let container = document.getElementById('custom-modal-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'custom-modal-container';
            container.className = 'custom-modal-overlay';
            document.body.appendChild(container);
        }
        return container;
    },

    /**
     * Custom Alert
     * @param {string} message 
     * @param {string} title 
     * @returns {Promise}
     */
    alert(message, title = 'Notification') {
        const container = this.getContainer();
        return new Promise((resolve) => {
            const modal = document.createElement('div');
            modal.className = 'custom-modal-card alert-modal active';
            modal.innerHTML = `
                <div class="modal-icon info">
                    <i class="fa-solid fa-circle-info"></i>
                </div>
                <h3>${title}</h3>
                <p>${message}</p>
                <div class="modal-actions">
                    <button class="btn btn-primary" style="width: 100%;">OK</button>
                </div>
            `;
            container.innerHTML = '';
            container.appendChild(modal);
            container.classList.add('active');

            modal.querySelector('button').onclick = () => {
                container.classList.remove('active');
                setTimeout(() => {
                    modal.remove();
                    resolve();
                }, 300);
            };
        });
    },

    /**
     * Custom Confirm
     * @param {string} message 
     * @param {string} title 
     * @returns {Promise<boolean>}
     */
    confirm(message, title = 'Are you sure?') {
        const container = this.getContainer();
        return new Promise((resolve) => {
            const modal = document.createElement('div');
            modal.className = 'custom-modal-card confirm-modal active';
            modal.innerHTML = `
                <div class="modal-icon warning">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                </div>
                <h3>${title}</h3>
                <p>${message}</p>
                <div class="modal-actions">
                    <button class="btn btn-outline cancel-btn" style="flex: 1;">Cancel</button>
                    <button class="btn btn-primary confirm-btn" style="flex: 1; background: #ef4444; border-color: #ef4444;">Confirm</button>
                </div>
            `;
            container.innerHTML = '';
            container.appendChild(modal);
            container.classList.add('active');

            const closeModal = (result) => {
                container.classList.remove('active');
                setTimeout(() => {
                    modal.remove();
                    resolve(result);
                }, 300);
            };

            modal.querySelector('.cancel-btn').onclick = () => closeModal(false);
            modal.querySelector('.confirm-btn').onclick = () => closeModal(true);
        });
    },

    /**
     * Custom Prompt
     * @param {string} message 
     * @param {string} defaultValue 
     * @param {string} title 
     * @returns {Promise<string|null>}
     */
    prompt(message, defaultValue = '', title = 'Input Required') {
        const container = this.getContainer();
        return new Promise((resolve) => {
            const modal = document.createElement('div');
            modal.className = 'custom-modal-card prompt-modal active';
            modal.innerHTML = `
                <div class="modal-icon edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <h3>${title}</h3>
                <p>${message}</p>
                <div class="form-group" style="margin: 20px 0;">
                    <input type="text" class="form-control" value="${defaultValue}" id="prompt-input" autofocus>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-outline cancel-btn" style="flex: 1;">Cancel</button>
                    <button class="btn btn-primary confirm-btn" style="flex: 1;">Submit</button>
                </div>
            `;
            container.innerHTML = '';
            container.appendChild(modal);
            container.classList.add('active');

            const input = modal.querySelector('#prompt-input');
            input.focus();
            input.select();

            const closeModal = (result) => {
                container.classList.remove('active');
                setTimeout(() => {
                    modal.remove();
                    resolve(result);
                }, 300);
            };

            modal.querySelector('.cancel-btn').onclick = () => closeModal(null);
            modal.querySelector('.confirm-btn').onclick = () => closeModal(input.value);

            // Handle Enter key
            input.onkeydown = (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    closeModal(input.value);
                }
                if (e.key === 'Escape') {
                    closeModal(null);
                }
            };
        });
    },

    /**
     * Custom Toast Notification
     * @param {string} message 
     * @param {string} type - 'success', 'warning', 'error', 'info'
     */
    toast(message, type = 'success') {
        let toastContainer = document.getElementById('toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toast-container';
            toastContainer.style.cssText = `
                position: fixed;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
                pointer-events: none;
            `;
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        const colors = {
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#0e8af0'
        };
        const icons = {
            success: 'fa-circle-check',
            warning: 'fa-triangle-exclamation',
            error: 'fa-circle-exclamation',
            info: 'fa-circle-info'
        };

        toast.className = 'custom-toast';
        toast.style.cssText = `
            background: white;
            color: #1e293b;
            padding: 12px 24px;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 300px;
            border-left: 5px solid ${colors[type]};
            transform: translateY(20px);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: auto;
        `;

        toast.innerHTML = `
            <i class="fa-solid ${icons[type]}" style="color: ${colors[type]}; font-size: 1.2rem;"></i>
            <span style="font-weight: 600; font-size: 0.95rem;">${message}</span>
        `;

        toastContainer.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
        });

        // Remove
        setTimeout(() => {
            toast.style.transform = 'translateY(-20px)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    }
};

// Replace global methods
// Note: This won't work perfectly for existing synchronous calls if they expect a blocking behavior.
// We must refactor the callers to use UIMessage directly or await these.
// However, for the purpose of this task, we will refactor the callers in the codebase.
window.customAlert = (msg, title) => UIMessage.alert(msg, title);
window.customConfirm = (msg, title) => UIMessage.confirm(msg, title);
window.customPrompt = (msg, def, title) => UIMessage.prompt(msg, def, title);
window.showToast = (msg, type) => UIMessage.toast(msg, type);
