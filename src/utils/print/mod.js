import { initCLodop } from '@/utils/print/lodop';

export function printOutStockTag(tags) {
  const LODOP = initCLodop();
  LODOP.SET_PRINT_PAGESIZE(1, '100mm', '100mm', '');
  LODOP.SET_PRINT_STYLE('HOrient', 2);
  tags.forEach((item) => {
    const HTM = `
      <div style="text-align: center; width: 300px;">
        <div style="font-weight: bold;font-size: 32px;line-height: 48px;">
          ${item.box_no}
        </div>
        <div style="font-size: 20px;line-height: 30px;">
          <div>${item.shelves_no} - ${item.shelves_container_no}</div>
          <div>${item.rowThree}</div>
          <div>${item.rowFour}</div>
        </div>
        <div style="margin-top: 8px;">
          <img src="${item.qrCode}" />
        </div>
      </div>
    `;
    LODOP.ADD_PRINT_HTM(15, 0, 300, 340, HTM);
    LODOP.NEWPAGE();
  });

  // LODOP.SET_PRINTER_INDEX('GK888T'); // 设置使用哪个打印机
  LODOP.PREVIEW(); // 打印预览
  // LODOP.PRINT(); // 直接打印
}

export function printInStockTags(tags) {
  const LODOP = initCLodop();
  LODOP.SET_PRINT_PAGESIZE(1, '100mm', '100mm', '');
  tags.forEach((item) => {
    const HTM = `
    <div style="width: 320px;padding: 12px;font-size: 15px;">
      <div style="font-weight: bold; font-size: 20px;margin-bottom: 16px;">
        <span>${item.product_number}</span>
        <span style="float: right;">QTY: ${item.ship_quantity}</span>
      </div>
      <div style="display: flex;justify-content: space-between;line-height: 32px;">
        <div style="margin-right: 16px;">
          <div>
            MPN：${item.mpn}
          </div>
          <div>
            Customer No. ${item.customer_no}
          </div>
          <div>
            ${item.description}
          </div>
          <div>
            ${item.package}
          </div>
          <div>
            ${item.szlcsc_no}
          </div>
        </div>
        <div style="display: flex;flex-direction: column;justify-content: space-between;align-items: center;">
          <img src="${item.qrCode}" />
          <div>LCSC.COM</div>
        </div>
      </div>
    </div>
  `;
    LODOP.ADD_PRINT_HTM(15, 15, 300, 340, HTM);
    LODOP.NEWPAGE();
  });
  LODOP.PREVIEW(); // 打印预览
}

