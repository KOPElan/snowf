var actionResult=require('../../lib/actionResult');

const homeController = {
    indexAction: function (req, res) {
        var context = {
            viewbag: {
                title: 'SnowFramework',
                topic: 'Hello Snowframework!',
                content: 'A Simple nodeJS Web Framework, hello world !'
            },
            viewModel: {
                content: 'hello vue example!',
                alert: 'this is a model data'
            }
        };
        res.send(actionResult.view, context);
    },
    aboutAction: function (req, res) {
        //TODO:业务逻辑                        
        res.send(snowf.action.content(action.contentType.html),"hello content");        
    }
}

module.exports = homeController;