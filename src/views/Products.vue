<template>
  <div style="margin-top: 100px">
    <div class="row">
      <div class="col-3 boder">
        <div>
          <!-- Via multiple directive modifiers -->
          <b-button v-b-toggle.collapse-a.collapse-b
            >Toggle Collapse A and B</b-button
          >
          <!-- Elements to collapse -->
          <b-collapse id="collapse-a" class="mt-2">
            <b-card>I am collapsible content A!</b-card>
          </b-collapse>
          <b-collapse id="collapse-b" class="mt-2">
            <b-card>I am collapsible content B!</b-card>
          </b-collapse>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="title"><span>Sản phẩm mới</span></div>
            <div class="d-flex flex-wrap">
              <Product
                v-for="item in allProduct"
                :key="item._id"
                :item="item"
              ></Product>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/product";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Product,
  },
  methods: {
    ...mapActions(["getProduct"]),
  },
  mounted() {
    this.getProduct();
  },
  computed: {
    ...mapGetters(["allProduct"]),
  },
};
</script>

<style scoped>
.left {
  background-color: cadetblue;
}

.boder {
  border: 1px solid;
  border-radius: 10px;
}
</style>
