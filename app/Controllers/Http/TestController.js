'use strict'

class TestController {
   //Extracting the view class of the HTTP context
    add({ view }) {
        return view.render('add')
    }
    enter({ response }) {
        return response.redirect('/product/add');
    }
    product({ request }) {
        const product_id = request.input('product_id')
        const product_name = request.input('product_name')
        return product_id + ', ' + product_name
    }
    info({ params }) {
        return `Product ID ${params.product_id}`

    }
    macbook({ response }) {
        return response.route('product.info', { product_id: 1 })
        //return response.route('TestController.info', { product_id: 1 });

    }
    cook({ request, response }) {
        //response.plainCookie('cartTotal', 20)
        response.cookie('product_id', 1201)
        return request.cookie('product_id')
    }
    thinkpad({ response }) {
        response.header("Content-type","application/xml");
        return `<product>
        <id>1100</id>
        <name>Thinkpad X1</name> </product>`;
    }
    
}

module.exports = TestController