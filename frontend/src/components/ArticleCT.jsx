import React from "react";

const ArticleCT = () => {
  return (
    <article class="w-full flex h-[120px] my-3 overflow-hidden rounded shadow transition hover:shadow-lg">
      <img
        alt="Office"
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        class="h-[120px] w-[100px] object-cover"
      />

      <div class="bg-white p-2">
        <h3 class="text-lg font-bold text-gray-900 line-clamp-1">
          ลาดกระบังโฮเทล
        </h3>
        <h4 class="text-sm text-gray-500 line-clamp-1">
          ลาดกระบัง กรุงเทพมหานคร
        </h4>
        <h4 class="text-sm  text-gray-900 line-clamp-1">5000-6000 บาท/เดือน</h4>
        <h4 class="text-sm  text-gray-900 line-clamp-1">650 บาท/วัน</h4>
      </div>
    </article>
  );
};

export default ArticleCT;
