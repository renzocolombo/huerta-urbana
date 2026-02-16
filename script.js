const PACKS_DATA = [
    {
        id: 'combo-economico',
        name: 'Combo Económico Inicio',
        desc: 'Ideal para probar el servicio (1–2 personas).',
        price: 1800,
        items: [
            { name: 'Papa', qty: 1, unit: 'kg' },
            { name: 'Cebolla', qty: 1, unit: 'kg' },
            { name: 'Tomate', qty: 0.5, unit: 'kg' },
            { name: 'Zanahoria', qty: 0.5, unit: 'kg' },
            { name: 'Lechuga', qty: 1, unit: 'unidad' }
        ]
    },
    {
        id: 'combo-esencial',
        name: 'Combo Esencial Semanal',
        desc: 'Ideal para 2–3 personas. Resuelve comidas de toda la semana.',
        price: 2800,
        items: [
            { name: 'Papa', qty: 1, unit: 'kg' },
            { name: 'Cebolla', qty: 1, unit: 'kg' },
            { name: 'Tomate', qty: 1, unit: 'kg' },
            { name: 'Lechuga', qty: 1, unit: 'unidad' },
            { name: 'Zanahoria', qty: 0.5, unit: 'kg' },
            { name: 'Zapallito', qty: 1, unit: 'unidad' },
            { name: 'Morrón', qty: 1, unit: 'unidad' }
        ]
    },
    {
        id: 'combo-familiar',
        name: 'Combo Familiar Clásico',
        desc: 'Ideal para 4 personas. El pack más completo y rendidor.',
        price: 4200,
        items: [
            { name: 'Papa', qty: 2, unit: 'kg' },
            { name: 'Cebolla', qty: 1, unit: 'kg' },
            { name: 'Tomate', qty: 1, unit: 'kg' },
            { name: 'Zanahoria', qty: 1, unit: 'kg' },
            { name: 'Lechugas', qty: 2, unit: 'unidades' },
            { name: 'Zapallitos', qty: 2, unit: 'unidades' },
            { name: 'Morrón', qty: 1, unit: 'unidad' },
            { name: 'Zapallo', qty: 1, unit: 'unidad' }
        ]
    },
    {
        id: 'combo-ahorro',
        name: 'Combo Ahorro Mayorista',
        desc: 'Para familias grandes. Mayor cantidad, mejor precio por kilo.',
        price: 5500,
        items: [
            { name: 'Papa', qty: 3, unit: 'kg' },
            { name: 'Cebolla', qty: 2, unit: 'kg' },
            { name: 'Tomate', qty: 2, unit: 'kg' },
            { name: 'Zanahoria', qty: 2, unit: 'kg' },
            { name: 'Lechugas', qty: 2, unit: 'unidades' },
            { name: 'Morrones', qty: 2, unit: 'unidades' },
            { name: 'Zapallitos', qty: 2, unit: 'unidades' },
            { name: 'Zapallo grande', qty: 1, unit: 'unidad' }
        ]
    },
    {
        id: 'combo-ensalada',
        name: 'Combo Ensalada Premium',
        desc: 'Todo lo necesario para ensaladas frescas y saludables.',
        price: 2500,
        items: [
            { name: 'Lechuga', qty: 1, unit: 'unidad' },
            { name: 'Rúcula', qty: 1, unit: 'unidad' },
            { name: 'Tomate', qty: 1, unit: 'kg' },
            { name: 'Zanahoria', qty: 0.5, unit: 'kg' },
            { name: 'Remolacha', qty: 1, unit: 'unidad' },
            { name: 'Morrón', qty: 1, unit: 'unidad' },
            { name: 'Pepino', qty: 1, unit: 'unidad' }
        ]
    },
    {
        id: 'combo-frutas-verduras',
        name: 'Combo Frutas + Verduras',
        desc: 'Resolvé todo en un solo pedido semanal.',
        price: 3800,
        items: [
            { name: 'Papa', qty: 1, unit: 'kg' },
            { name: 'Cebolla', qty: 1, unit: 'kg' },
            { name: 'Tomate', qty: 1, unit: 'kg' },
            { name: 'Lechuga', qty: 1, unit: 'unidad' },
            { name: 'Manzana', qty: 1, unit: 'kg' },
            { name: 'Banana', qty: 1, unit: 'kg' },
            { name: 'Naranja', qty: 1, unit: 'kg' }
        ]
    },
    {
        id: 'combo-fit-saludable',
        name: 'Combo Fit Saludable',
        desc: 'Alimentación saludable / gym. Incluye frutos secos.',
        price: 3200,
        items: [
            { name: 'Lechuga', qty: 1, unit: 'unidad' },
            { name: 'Rúcula o Espinaca', qty: 1, unit: 'unidad' },
            { name: 'Tomate', qty: 1, unit: 'kg' },
            { name: 'Zanahoria', qty: 0.5, unit: 'kg' },
            { name: 'Palta', qty: 1, unit: 'unidad' },
            { name: 'Brócoli', qty: 1, unit: 'unidad' },
            { name: 'Zapallito', qty: 1, unit: 'unidad' },
            { name: 'Pepino', qty: 1, unit: 'unidad' },
            { name: 'Frutos secos mix', qty: 250, unit: 'g' }
        ]
    },
    {
        id: 'combo-fit-premium',
        name: 'Combo Fit Premium',
        desc: 'Alimentación consciente y equilibrada. Versión completa.',
        price: 4800,
        items: [
            { name: 'Base Fit Saludable', qty: 1, unit: 'pack' },
            { name: 'Manzana verde', qty: 1, unit: 'kg' },
            { name: 'Banana', qty: 1, unit: 'kg' },
            { name: 'Semillas (chia/lino)', qty: 250, unit: 'g' }
        ]
    }
];

let cart = [];
let currentCustomizingPack = null;
const SHIPPING_COST = 600; // Pilar zona norte


document.addEventListener('DOMContentLoaded', () => {
    renderPacks();
    updateCartIcon();
});

// Renderizar Packs en la Home
function renderPacks() {
    const container = document.getElementById('packs-container');
    container.innerHTML = PACKS_DATA.map(pack => `
        <div class="pack-card">
            <h3>${pack.name}</h3>
            <p>${pack.desc}</p>
            <div class="price">$${pack.price}</div>
            <ul>
                ${pack.items.map(item => `<li>${item.qty} ${item.unit} de ${item.name}</li>`).join('')}
            </ul>
            <button class="btn btn-outline" onclick="openCustomizeModal('${pack.id}')">Personalizar</button>
        </div>
    `).join('');
}

// Lógica de Modal
function openCustomizeModal(packId) {
    const pack = PACKS_DATA.find(p => p.id === packId);
    currentCustomizingPack = JSON.parse(JSON.stringify(pack)); // Clonar

    document.getElementById('modal-title').innerText = `Personalizar ${pack.name}`;
    renderModalItems();
    updateModalTotal();

    document.getElementById('customize-modal').style.display = 'block';
}

function renderModalItems() {
    const list = document.getElementById('modal-items-list');
    list.innerHTML = currentCustomizingPack.items.map((item, index) => `
        <div class="item-row">
            <span>${item.name} (${item.unit})</span>
            <div class="item-controls">
                <button onclick="updateQty(${index}, -0.5)">-</button>
                <span>${item.qty}</span>
                <button onclick="updateQty(${index}, 0.5)">+</button>
            </div>
        </div>
    `).join('');
}

function updateQty(index, delta) {
    currentCustomizingPack.items[index].qty = Math.max(0, currentCustomizingPack.items[index].qty + delta);
    renderModalItems();
}

function updateModalTotal() {
    document.getElementById('modal-total-price').innerText = `$${currentCustomizingPack.price}`;
}

function closeModal() {
    document.getElementById('customize-modal').style.display = 'none';
}

// Lógica de Carrito
function addToCartFromModal() {
    cart.push({
        ...currentCustomizingPack,
        uniqueId: Date.now()
    });
    closeModal();
    updateCartIcon();
    renderCart();

    // Pequeño feedback visual
    const icon = document.querySelector('.cart-icon');
    icon.classList.add('bump');
    setTimeout(() => icon.classList.remove('bump'), 300);

    toggleCart(); // Abrir carrito para mostrar progreso
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('open');
}

function updateCartIcon() {
    document.querySelector('.cart-count').innerText = cart.length;
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 2rem;">Tu carrito está vacío.</p>';
        updateSummary(0);
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item-row" style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #333;">
            <div style="display:flex; justify-content: space-between; width: 100%;">
                <strong>${item.name}</strong>
                <span>$${item.price}</span>
            </div>
            <small style="color:var(--text-secondary); display: block; margin: 0.5rem 0;">${item.items.filter(i => i.qty > 0).map(i => i.name).join(', ')}</small>
            <button onclick="removeFromCart(${index})" style="background:none; border:none; color: #ff4444; font-size: 0.7rem; cursor:pointer; padding:0;">ELIMINAR</button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    updateSummary(subtotal);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
    updateCartIcon();
}

function updateSummary(subtotal) {
    const shipping = subtotal > 0 ? SHIPPING_COST : 0;
    document.getElementById('cart-subtotal').innerText = `$${subtotal}`;
    document.getElementById('cart-shipping').innerText = `$${shipping}`;
    document.getElementById('cart-total').innerText = `$${subtotal + shipping}`;
}

// Lógica de Checkout
function goToCheckout() {
    if (cart.length === 0) return alert('Agrega un pack para continuar.');

    document.querySelector('main').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
    toggleCart(); // Cerrar drawer

    renderCheckoutSummary();
}

function hideCheckout() {
    document.querySelector('main').style.display = 'block';
    document.getElementById('checkout').style.display = 'none';
}

function renderCheckoutSummary() {
    const container = document.getElementById('checkout-items');
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal + SHIPPING_COST;

    container.innerHTML = cart.map(item => `
        <div class="summary-line">
            <span>${item.name}</span>
            <span>$${item.price}</span>
        </div>
    `).join('') + `
        <div class="summary-line" style="margin-top: 2rem; border-top: 1px solid #333; padding-top: 1rem;">
            <span>Subtotal</span>
            <span>$${subtotal}</span>
        </div>
        <div class="summary-line">
            <span>Envío</span>
            <span>$${SHIPPING_COST}</span>
        </div>
        <div class="summary-line total">
            <span>TOTAL</span>
            <span>$${total}</span>
        </div>
    `;
}

// Simulación de Pedido y envío a WhatsApp
document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.elements[0].value;
    const address = e.target.elements[1].value;
    const phone = e.target.elements[2].value;

    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal + SHIPPING_COST;

    // Crear el mensaje para WhatsApp
    let message = `Hola Huerta Urbana! Mi nombre es *${name}*.\n`;
    message += `Quiero realizar el siguiente pedido:\n\n`;

    cart.forEach(item => {
        message += `✅ *${item.name}* - $${item.price}\n`;
        const customizedItems = item.items.filter(i => i.qty > 0);
        customizedItems.forEach(ci => {
            message += `  - ${ci.qty}${ci.unit} ${ci.name}\n`;
        });
    });

    message += `\n📍 *Dirección:* ${address}\n`;
    message += `📱 *WhatsApp:* ${phone}\n`;
    message += `🚚 *Envío:* $${SHIPPING_COST}\n`;
    message += `💰 *TOTAL FINAL:* $${total}\n\n`;
    message += `Coordinamos el pago por transferencia?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5491161771376?text=${encodedMessage}`;

    alert('¡Gracias! Te estamos redirigiendo a WhatsApp para finalizar tu pedido con Huerta Urbana.');

    window.open(whatsappUrl, '_blank');

    // Limpiar carrito y resetear vista
    cart = [];
    updateCartIcon();
    hideCheckout();
});

// Menú Móvil
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });
}

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});
