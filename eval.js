const cj_icon = 'https://m.ccw.site/avatar/678cc9343778fc282d6252c5/4f8f1c67-6a2d-4670-bc70-a774bfe43b93.png';
const extensionId = 'cjeval'
class cjeval {
    getInfo() {
        return {
            id: extensionId,
            name: '执行 js',
            color1: '#00aeff',
            menuIconURI: cj_icon,
            blocks: [
                {
                    opcode: 'eval1',
                    text: '执行 JavaScript [JS]',
                    blockType: Scratch.BlockType.COMMAND,
                    arguments: {
                        JS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'document.body.remove()'
                        }
                    }
                },
                {
                    opcode: 'eval2',
                    text: '执行 JavaScript [JS] 或获取错误',
                    blockType: Scratch.BlockType.REPORTER,
                    arguments: {
                        JS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'document.body.outerHTML'
                        }
                    }
                },
                {
                    opcode: 'evallog',
                    text: '执行 JavaScript [JS] 并记入控制台',
                    blockType: Scratch.BlockType.COMMAND,
                    arguments: {
                        JS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'document.body.outerHTML'
                        }
                    }
                }
            ],
        }
    }

    async eval1(args) {
        eval(args.JS);
    }

    async eval2(args) {
        return eval(args.JS);
    }

    async evallog(args) {
        console.log(eval(args.JS));
    }
}
 
Scratch.extensions.register(new cjeval)
window.tempExt = {
  Extension: cjeval,
  info: {
    name: 'Chen-Jin 的 eval',
    description: '执行任意 js',
    extensionId,
    iconURL: "https://m.ccw.site/works-covers/7e653fa1-19b9-421b-8619-6d61e13a50b8.png", 
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
