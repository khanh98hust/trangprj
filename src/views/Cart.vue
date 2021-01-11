<template>
    <div>
<div class="container" style="margin-top : 100px">
  <table id="cart" class="table table-hover table-condensed">
    <thead>
      <tr>
        <th style="width:50%">Sản phẩm</th>
        <th style="width:10%">Giá</th>
        <th style="width:8%">Số lượng</th>
        <th style="width:22%" class="text-center">Thành tiền</th>
        <th style="width:10%"></th>
      </tr>
    </thead>
    <tbody v-for="(pr, i) in allCart" :key="i">
      <tr>
        <td data-th="Product">
          <div class="row">
            <div class="col-sm-2 hidden-xs"><img style="height : 100px" :src="`http://localhost:8000/${pr.product.Img}`" alt="..." class="img-responsive" /></div>
            <div class="col-sm-10">
              <h4>{{pr.product.Name}}</h4>
            </div>
          </div>
        </td>
        <td data-th="Price">{{pr.product.Price}}</td>
        <td data-th="Quantity">
          <input type="number" class="form-control text-center" :value="pr.quantity">
        </td>
        <td data-th="Subtotal" class="text-center">{{pr.quantity * pr.product.Price}} VNĐ</td>
        <td class="actions" data-th="">
          <button @click="deleteProductToCart(pr.product)" class="btn btn-danger btn-sm"><i class="fa fa-trash-o">X</i></button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td><router-link  tag="button" to="/products" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</router-link></td>
        <td colspan="2" class="hidden-xs"></td>
        <td class="hidden-xs text-center"><strong>Total: {{price}} VNĐ</strong></td>
        <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
      </tr>
    </tfoot>
  </table>
</div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
    export default {
        computed:{
            ...mapGetters(['allCart', 'price'])
        },
        methods: {
            ...mapActions(['deleteProductToCart'])
        },
    }
</script>

<style scoped>
.table>tbody>tr>td,
.table>tfoot>tr>td {
  vertical-align: middle;
}

@media screen and (max-width: 600px) {
  table#cart tbody td .form-control {
    width: 20%;
    display: inline !important;
  }
  .actions .btn {
    width: 36%;
    margin: 1.5em 0;
  }
  .actions .btn-info {
    float: left;
  }
  .actions .btn-danger {
    float: right;
  }
  table#cart thead {
    display: none;
  }
  table#cart tbody td {
    display: block;
    padding: .6rem;
    min-width: 320px;
  }
  table#cart tbody tr td:first-child {
    background: #333;
    color: #fff;
  }
  table#cart tbody td:before {
    content: attr(data-th);
    font-weight: bold;
    display: inline-block;
    width: 8rem;
  }
  table#cart tfoot td {
    display: block;
  }
  table#cart tfoot td .btn {
    display: block;
  }
}
</style>