<template>
    <div style="">
        <div id="project-wrapper">
	<div id="project-container">
		<div id="left">
			<div id="product">
				<img :src="`http://localhost:8000/${detail.Img}`" alt="" style="width : 400px"/>
			</div>
			<div id="overlay"></div>
		</div>
		<div id="right">
			<h2>{{detail.Name}}</h2>
			<p class="price">Giá : {{detail.Price}}</p>
			<p>{{detail.Title}}</p>
			<ul>
				<li>Clear highs and deep lows for premium sound quality</li>
			</ul>
			<button class="purchase" @click="addToCart">Thêm vào giỏ hàng
            <i class="fa fa-cart-plus" aria-hidden="true"></i></button>
		</div>
	</div>
</div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        data(){
            return{

            }
        },
        methods:{
            ...mapActions(['getDetail']),
            
            addToCart(){
            this.$store.dispatch('addProductToCart', {
                product : this.detail,
                quantity : 1
            })
            }
        },
        mounted(){
            this.getDetail(this.$route.params.id)
        },
        computed:{
            ...mapGetters(['detail'])
        }
    }
</script>

<style lang="scss" scoped>
$font: 'proxima-nova', 'Lato', sans-serif;
$primary: #e74c3c;
$primary-light: #ee4f3f;

*:focus {
	outline: none;
}

body {
	min-height: 100vh;
	font-family: $font;
	background: #333;
	
	#project-wrapper {
		height: 100vh;
		display: flex;
		display: -webkit-flex;
		-webkit-align-items: center;
		align-items: center;
		-webkit-justify-content: center;
		justify-content: center;
		
		#project-container {
			background: white;
			height: 330px;
			min-width: 650px;
			width: 650px;
			position: relative;
			z-index: 2;
			border-radius: 2px;
			overflow: hidden;
			-webkit-box-shadow: 0px 3px 15px 	-1px rgba(0,0,0,0.5);
			-moz-box-shadow: 0px 3px 15px -1px rgba(0,0,0,0.5);
			box-shadow: 0px 3px 15px -1px rgba(0,0,0,0.5);
			
			#left {
				float: left;
				width: 40%;
				height: 100%;
				background: $primary;
				overflow: hidden;
				
				#overlay {
					position: absolute;
					z-index: 2;
					top: 0;
					left: 0;
					opacity: .3;
					width: 40%;
					height: 100%;
					-webkit-filter: blur(5px);
					-moz-filter: blur(5px);
					filter: blur(5px);
					background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/beats-bg-2.jpg');
					background-size: cover;
					background-position: 270px 0px;
				}
				
				#product {
					width: 100%;
					margin-top: 50px;
					z-index: 3;
					position: relative;
					
					img {
						width: 90%;
						margin-left: -25px;
					}
				}
			}
			
			#right {
				float: right;
				width: 60%;
				box-sizing: border-box;
				padding: 25px;
				
				h2 {
					font-size: 1.2em;
					font-weight: 600;
					margin-bottom: 15px;
				}
				
				p.price {
					color: $primary;
					font-size: 1.2em;
					margin-bottom: 30px;
				}
				
				p {
					font-size: 0.9em;
				}
				
				ul {
					padding: 20px;
					li {
						list-style: initial;
						opacity: .5;
						font-size: 0.8em;
						padding-bottom: 6px;
					}
				}
				
				button.purchase {
					background: $primary;
					border: none;
					border-radius: 30px;
					width: 100%;
					padding: 14px 0;
					color: white;
					font-size: 0.8em;
					text-transform: uppercase;
					font-weight: 600;
					cursor: pointer;
					font-family: $font;
					
					&:hover {
						background: $primary-light;
					}
					
					i {
						margin-left: 4px;
						font-size: 1.2em;
					}
				}
			}
		}
	}
	
	#dailyui {
		position: fixed;
		font-size: 12em;
		font-weight: 700;
		margin: 0 0 -28px 0;
		padding: 0;
		right: 0;
		bottom: 0;
		color: rgba(0, 0, 0, .3);
		z-index: 1;
		text-align: right;
		font-family: 'proxima-nova', 'Lato', sans-serif;
	}
}
</style>