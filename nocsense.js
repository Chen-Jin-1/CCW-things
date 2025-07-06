document.querySelector('[title="CCW 脆弱性的根本证明。"]')?.remove()
document.querySelector('.csense-window')?.remove()
let button = [];
const targetStyle = 'background-color: rgba(0, 0, 0, 0.5);';
function handleElements() {
    const elements = document.querySelectorAll(`[style*="${targetStyle}"]`);
    elements.forEach((item, index) => {
        item.style.display = 'none';
        const button_dom = item.querySelector('button');
        if (!button.includes(button_dom)) {
            button.push(button_dom);
            setTimeout(() => {
                const button = item.querySelector('button');
                if (button) button.click();
                console.log("模拟点击了",button)
            }, index * 400);
        }
    });
}
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            const hasTarget = Array.from(mutation.addedNodes).some(node => {
                return node.nodeType === 1 && 
                      (node.hasAttribute('style') && 
                       node.getAttribute('style').includes(targetStyle) ||
                       node.querySelector(`[style*="${targetStyle}"]`));
            });
            
            if (hasTarget) {
                setTimeout(handleElements, 10);
            }
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

handleElements();

const cj_icon = 'https://m.ccw.site/avatar/678cc9343778fc282d6252c5/4f8f1c67-6a2d-4670-bc70-a774bfe43b93.png';
const extensionId = 'cjnocsense'
class cjnocsense {
  getInfo() {
    return {
      id: extensionId,
      name: 'Chen-Jin 的反 CSense 扩展',
      color1: '#00aeff',
      menuIconURI: cj_icon,
      blocks: [
        {
          opcode: 'nocszy',
          text: '占位（反 CSense）',
          blockType: null,
        }
      ],
    }
  }
  nocszy() {}
}
 
Scratch.extensions.register(new cjnocsense)
