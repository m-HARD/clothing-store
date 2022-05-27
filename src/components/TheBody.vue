<template>
    <div>
        
        



        <!-- component -->
        <div id="header" class="w-full border-b-2 bg-white">
            <div class="flex" style="height:600px;">
                <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
                    <div class="h-full object-cover" style="background-image: url(https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170)">
                        <div class="h-full bg-black opacity-25"></div>
                    </div>
                </div>
                <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">اخر التصاميم وبافضل الأسعار</h2>
                        <p class="mt-2 text-sm text-gray-500 md:text-base">يتمتع المتجر بمجموعة كبيرة من الازياء وبافضل الأسعار</p>
                        <div class="flex justify-center lg:justify-start mt-6">
                            <a class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">تابع التصفح</a>
                            <a class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <h1 class="mt-16 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">الأكثر مبيعا</h1>


        <!-- COMPONENT -->

        <div class="grid grid-cols-1 gap-8 mx-8 mt-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

            <div v-for="clotheBest in getBestSeller" v-bind:key="clotheBest.id" class="flex flex-col items-center justify-center w-full max-w-lg mx-auto bg-white border-2 shadow-md rounded-md overflow-hidden">
                <img class="object-cover w-full h-72 xl:h-80" v-bind:src="'src/assets/img/' + clotheBest.imgName" v-bind:alt="clotheBest.name">
                <h4 class="mt-2 text-lg font-medium text-gray-700" v-text="clotheBest.name"></h4>
                <div class="w-full px-2">
                    <span class="">تمساح<span></span></span>
                    <div class="flex items-center mt-4 text-gray-700 ">
                        <img class="h-6 ml-1" src="@/assets/svg/color.svg" alt="svg">
    
                        <div>
                            <span class="mx-1 inline-flex px-4 py-2 bg-red-500 rounded-full"></span>
                            <span class="mx-1 inline-flex px-4 py-2 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>
    
                    <div class="flex items-center mt-1 mb-2 text-gray-700 ">
                        <img class="h-6 ml-1" src="@/assets/svg/cash.svg" alt="svg">
    
                        <h1 class="px-2 text-lg font-extrabold">2000 <span class="mr-1 font-normal text-base">جنيه</span></h1>
                    </div>
                </div>
            </div>

        </div>

        <!-- //////////////////////////////////////////////////////////////////////////////////////////////////////// -->


        <h1 class="mt-16 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">الأكثر مبيعا</h1>

        <!-- COMPONENT -->
        
        <div class="grid grid-cols-1 gap-8 mx-8 mt-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

            <div v-for="clothe in clotheData" v-bind:key="clothe.id" class="flex flex-col items-center justify-center w-full max-w-lg mx-auto bg-white border-2 shadow-md rounded-md overflow-hidden">
                <img class="object-cover w-full h-72 xl:h-80" v-bind:src="'src/assets/img/' + clothe.imgName" alt="T-Shirt">
                <h4 class="mt-2 text-lg font-medium text-gray-700" v-text="clothe.name"></h4>
                <div class="w-full px-2">
                    <span class="">تمساح<span></span></span>
                    <div class="flex items-center mt-4 text-gray-700 ">
                        <img class="h-6 ml-1" src="@/assets/svg/color.svg" alt="svg">
    
                        <div>
                            <span class="mx-1 inline-flex px-4 py-2 bg-red-500 rounded-full"></span>
                            <span class="mx-1 inline-flex px-4 py-2 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>
    
                    <div class="flex items-center mt-1 mb-2 text-gray-700 ">
                        <img class="h-6 ml-1" src="@/assets/svg/cash.svg" alt="svg">
    
                        <h1 class="px-2 text-lg font-extrabold">2000 <span class="mr-1 font-normal text-base">جنيه</span></h1>
                    </div>
                </div>
            </div>

            

        </div>


    </div>
</template>


<script>
    export default {
        data() {
            return {
                clotheData:[
                    {id:1,name:'قميص',description:'تمساح',imgName:'1.jpg',bestSeller:true,sizes:[],colors:[],price:0},
                    {id:2,name:'فستان',description:'تمساح',imgName:'2.jpg',bestSeller:false,sizes:[],colors:[],price:0},
                    {id:3,name:'فستان اصفر',description:'تمساح',imgName:'3.jpg',bestSeller:true,sizes:[],colors:[],price:0},
                ],
                
            };
        },
        computed:{
            getBestSeller (){
                return this.clotheData.filter((item) => {
                    if(item.bestSeller){
                        return item
                    }
                    return false
                })
            },
        },
        
    };
</script>