if (!(location.href.includes("ccw.site/gandi") || location.href.includes("ccw.site/creator"))) {
    if (!confirm("此作品使用了 Chen-Jin 的自动确定拓展，请小心被骗币\n点击确定继续，点击取消关闭此页面")){
        window.close()
    }
}

const cj_icon = 'https://m.ccw.site/avatar/678cc9343778fc282d6252c5/4f8f1c67-6a2d-4670-bc70-a774bfe43b93.png';

class AutoOK {
    constructor() {}

    getInfo() {
        return {
            id: 'cjok',
            name: "自动确定",
            color1: '#00aeff',
            menuIconURI: cj_icon,
            blocks: [
                {
                    func: 'doc',
                    blockType: Scratch.BlockType.BUTTON,
                    text: '文档'
                },
                {
                    opcode: 'ok',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '自动确定 超时为[TIMEOUT]秒',
                    arguments: {
                        TIMEOUT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    }
                },
                {
                    opcode: 'when',
                    blockType: Scratch.BlockType.HAT,
                    text: '当询问框弹出'
                },
                {
                    blockType: Scratch.BlockType.LABEL,
                    text: '更多'
                },
                {
                    func: 'install_1',
                    blockType: Scratch.BlockType.BUTTON,
                    text: '安装 社区连接 Kontakt 拓展'
                },
                {
                    func: 'install_2',
                    blockType: Scratch.BlockType.BUTTON,
                    text: '安装 经济合约 拓展'
                },
                {
                    func: 'install_3',
                    blockType: Scratch.BlockType.BUTTON,
                    text: '安装 成就与排行 拓展'
                },
                {
                    opcode: 'cancal',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '自动取消 超时为[TIMEOUT]秒',
                    arguments: {
                        TIMEOUT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    }
                },
                {
                    opcode: 'close',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '关闭已打开的框',
                },
                {
                    opcode: 'close1',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '关闭排行榜',
                },
                {
                    opcode: 'close2',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '关闭成就列表',
                },
            ]
        };
    }

    async ok(args) {
        this.waitForElement(
            '.c-modal-enter.c-modal-enter-active',
            args.TIMEOUT*1000
        ).then(window1 => {
            window1.querySelector(".btn-default-2wq9q").style.display = 'none';
            window1.style.display = 'none';
            var button = window1.querySelector(".btn-primary-2CEZZ span");
            button.click();
        });
        return;
    }

    async cancal(args) {
        this.waitForElement(
            '.c-modal-enter.c-modal-enter-active',
            args.TIMEOUT*1000
        ).then(window1 => {
            window1.querySelector(".btn-default-2wq9q").style.display = 'none';
            window1.style.display = 'none';
            var button = window1.querySelector(".btn-default-2wq9q span");
            button.click();
        });
        return;
    }

    async close() {
        var window1 = document.querySelector('.rd-modal-enter-done');
        if (!window1) var window1 = document.querySelector('.c-modal-enter-done');
        var button = window1.querySelector(".rd-modal-close");
        if (!button) var button = window1.querySelector('.c-modal-close');
        button.click();
    }

    async close1(){
        document.querySelector(".MuiBox-root.css-1vnwwav").click()
    }

    async close2() {
        document.querySelector(".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.close-button-3gPFK.css-ylpl0p").click()
    }

    waitForElement(selector, timeout = 10000) {
        return new Promise((resolve) => {
            const startTime = Date.now();
            const checkInterval = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    clearInterval(checkInterval);
                    resolve(element);
                } else if (Date.now() - startTime > timeout) {
                    clearInterval(checkInterval);
                    resolve(null); // 超时返回 null
                }
            }, 10);
        });
    }

    when(){
        if (document.querySelector(".c-modal-enter.c-modal-enter-active")) {
            return true;
        } else {
            return false;
        }
    }

    async install_1(){this.install("https://static.xiguacity.cn/h1t86b7fg6c7k36wnt0cb30m/static/assets/cover.0cb318c0.jpg")}
    async install_2(){this.install("https://static.xiguacity.cn/h1t86b7fg6c7k36wnt0cb30m/static/assets/cover.2d39c715.jpg")}
    async install_3(){this.install("https://static.xiguacity.cn/h1t86b7fg6c7k36wnt0cb30m/static/assets/cover.d9d728be.png")}

    install(pic_url){
        var extension_button = document.querySelector('li[data-tip="扩展库"]')
        extension_button.click()
        var div = document.querySelector(`div img[src="${pic_url}"]`).parentElement.parentNode;
        var button = div.parentNode.querySelector(".gandi_extension-item_install_2jfIM");
        button.click();
        var code_button = document.querySelector('li[data-tip="代码"]')
        code_button.click()
    }

    doc(){
        window.open("https://learn.ccw.site/article/b936e344-0d60-4cd4-b8ef-db681118f163")
    }
    
    debugger(){
        debugger
    }
}

Scratch.extensions.register(new AutoOK());



window.tempExt = {
  Extension: AutoOK,
  info: {
    name: '自动确定',
    description: '无需点击，自动确定',
    extensionId: 'cjok',
    featured: true,
    disabled: false,
    iconURL: "https://m.ccw.site/works-covers/2b8f5cf0-bc8e-474e-b18a-9b06da529196.png",
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
// */
