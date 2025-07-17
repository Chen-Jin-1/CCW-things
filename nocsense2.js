document.querySelector('[title="CCW 脆弱性的根本证明。"]')?.remove()
document.querySelector('.csense-window')?.remove()
let clicked_button = []
function clickload() {
    const elements = document.querySelectorAll(`[style*="background-color: rgba(0, 0, 0, 0.5);"]`);
    elements.forEach((item, index) => {
        item.style.display = 'none';
        const button = item.querySelector('button');
        if (!clicked_button.includes(button)) {
            const button = item.querySelector('button');
            clicked_button.push(button)
            setTimeout(() => {
                if (button) button.click();
                console.log("模拟点击了",item,button)
            }, index * 400);
        }
    });
}
setInterval(clickload, 100);

const cj_icon = 'https://m.ccw.site/avatar/678cc9343778fc282d6252c5/4f8f1c67-6a2d-4670-bc70-a774bfe43b93.png';
const extensionId = 'cjnocsense'
class cjnocsense {
  getInfo() {
    return {
      id: extensionId,
      name: '⚠请尽快停用此扩展！\nChen-Jin 的反 CSense 扩展',
      color1: '#00aeff',
      color2: '#ff0000',
      blocks: [
        {
          blockType: Scratch.BlockType.LABEL,
          text: '请尽快卸载此扩展，\n若继续使用扩展，\n可能会导致你的工程无法打开\n你可以使用 CSense & Eureka 拦截器代替它'
        },
        // {
        //   opcode: 'nocszy',
        //   text: '占位（反 CSense）',
        //   blockType: null,
        //   hideFromPalette: true,
        // }
      ],
    }
  }
  nocszy() {}
}
 
Scratch.extensions.register(new cjnocsense)

window.tempExt = {
  Extension: cjnocsense,
  info: {
    name: '反 CSense',
    description: '让 CSense 报废吧',
    extensionId: 'cjnocsense',
    featured: true,
    disabled: false,
    insetIconURL: cj_icon,
    collaboratorList: [
      {
        collaborator: 'Chen-Jin @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/678cc9343778fc282d6252c5',
      },
    ],
  },
};
