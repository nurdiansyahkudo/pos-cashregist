# -*- coding: utf-8 -*-
# from odoo import http


# class PosCashregist(http.Controller):
#     @http.route('/pos_cashregist/pos_cashregist', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/pos_cashregist/pos_cashregist/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('pos_cashregist.listing', {
#             'root': '/pos_cashregist/pos_cashregist',
#             'objects': http.request.env['pos_cashregist.pos_cashregist'].search([]),
#         })

#     @http.route('/pos_cashregist/pos_cashregist/objects/<model("pos_cashregist.pos_cashregist"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('pos_cashregist.object', {
#             'object': obj
#         })

