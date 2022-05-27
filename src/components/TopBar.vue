<template>
  <div class="sticky top-0 z-50 bg-gray-200 shadow-xl">
    <div class="">
      <nav
        class="
          container
          px-6
          py-2
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <img src="@/assets/logo.svg" alt="" class="h-6 items-center hidden md:block">
        
        <div class="flex items-center justify-between">
          

          <span
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
              cursor-pointer
              font-serif
            "
            >Areen Style
          </span>

          <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Home
          </li>
        </ul>
      </nav>
    </div>




    <div id="tags" class="flex justify-center">
            <button class="flex items-center h-12 px-2 py-2 hover:bg-gray-300 text-center text-gray-700 border-bottom-width: 1px; border-gray-300 sm:px-4 -px-1 whitespace-nowrap focus:outline-none">
                <span class="mx-1 text-sm sm:text-base">
                    رجالي
                </span>
            </button>

            <button class="flex items-center h-12 px-2 py-2 hover:bg-gray-300 text-center text-gray-700 bg-transparent border-bottom-width: 1px; border-gray-300 sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                <span class="mx-1 text-sm sm:text-base">
                    نسائي
                </span>
            </button>

            <button class="flex items-center h-12 px-2 py-2 hover:bg-gray-300 text-center text-gray-700 bg-transparent border-bottom-width: 1px; border-gray-300 sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                <span class="mx-1 text-sm sm:text-base">
                    أطفال
                </span>
            </button>

            <button class="flex items-center h-12 px-2 py-2 hover:bg-gray-300 text-center text-gray-700 bg-transparent border-bottom-width: 1px; border-gray-300 sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                <span class="mx-1 text-sm sm:text-base">
                    ملحقات
                </span>
            </button>

            <button class="flex items-center h-12 px-2 py-2 hover:bg-gray-300 text-center text-gray-700 bg-transparent border-bottom-width: 1px; border-gray-300 sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                <span class="mx-1 text-sm sm:text-base">
                    الأكثر مبيعا
                </span>
            </button>
        </div>
  </div>

</template>

<style>
  .tagActive{
    border-width: 1px;
    border-bottom-width: 0px;
    border-top-left-radius: 0.375rem/* 6px */;
    border-top-right-radius: 0.375rem/* 6px */;
  }
  .tagNotActive{
    border-bottom-width: 1px;
  }
</style>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  }
};
</script>