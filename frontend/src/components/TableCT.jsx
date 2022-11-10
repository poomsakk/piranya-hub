import React from "react";

const TableCT = ({ items }) => {
  return (
    <div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
      <table class="min-w-full divide-y divide-gray-200 text-sm">
        <thead class="bg-gray-100">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              ประเภท
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              รูปแบบห้อง
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              ค่าเช่ารายเดือน
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              ค่าเช่ารายวัน
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              ค่าเช่ารายวัน
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          {items.map((item, i) => {
            return (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.type}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.roomLayout}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.monthlyRent}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.dailyRent}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.state}
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
