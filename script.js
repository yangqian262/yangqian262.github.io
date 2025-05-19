// 一食堂店家列表
const canteen1Stores = ["米线", "烧腊", "麻辣烫", "海南鸡饭", "大众餐", "兰州牛肉面", "牛杂面", "莫小南水饺", "塔斯汀", "中国汉堡"]; // 定义一食堂的店家名称数组
// 二食堂店家列表
const canteen2Stores = ['店家4', '店家5', '店家6']; // 定义二食堂的店家名称数组

// 获取用于显示结果的 div 元素
const resultDiv = document.getElementById('result');
// 获取一食堂选择按钮元素
const canteen1Button = document.getElementById('canteen1');
// 获取二食堂选择按钮元素
const canteen2Button = document.getElementById('canteen2');

let currentStores = [];

// 获取选择按钮元素
const selectButton = document.getElementById('selectButton');

// 为一食堂按钮添加点击事件监听器
canteen1Button.addEventListener('click', () => {
    selectButton.style.display = 'block';
    currentStores = canteen1Stores;
    showRandomStore(currentStores);
});

// 为二食堂按钮添加点击事件监听器
canteen2Button.addEventListener('click', () => {
    selectButton.style.display = 'block';
    currentStores = canteen2Stores;
    showRandomStore(currentStores);
});

// 为选择按钮添加点击事件监听器
selectButton.addEventListener('click', () => {
    if (currentStores.length > 0) {
        showRandomStore(currentStores);
    }
});

/**
 * 从给定的店家列表中随机选择一个店家，并显示在页面上
 * @param {Array} stores - 店家名称数组
 */
function showRandomStore(stores) {
    // 生成一个 0 到数组长度减 1 之间的随机整数
    const randomIndex = Math.floor(Math.random() * stores.length);
    // 根据随机索引从数组中获取一个随机店家名称
    const randomStore = stores[randomIndex];
    resultDiv.textContent = randomStore; // 将随机店家名称显示在页面上
    resultDiv.classList.add('roll'); // 为结果 div 添加 roll 类，触发滚动动画
    // 1 秒后移除 roll 类，以便下次点击可以重新触发动画
    setTimeout(() => {
        resultDiv.classList.remove('roll');
    }, 1000);
}