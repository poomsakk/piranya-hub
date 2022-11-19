import React from "react";

const TableCT = ({ items }) => {
  return (
    <div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-600">
      <table class="min-w-full divide-y divide-gray-400 text-sm">
        <thead class="bg-gray-300">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              ประเภท
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              ขนาดห้อง
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              ค่าเช่ารายเดือน
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              ค่าเช่ารายวัน
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              สถานะห้อง
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          {items.map((item, i) => {
            return (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.typeName}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.size}{" "}{"ตร.ม."}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.pricePerMonth}{" "}{"บาท"}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.pricePerDay === 0 ? "-" : item.pricePerDay}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.available ? "ว่าง" : "ไม่ว่าง"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableCT;
