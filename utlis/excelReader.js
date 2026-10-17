const ExcelJS = require('exceljs');
//file path,sheetname parameter ayitt pass cheythathan
async function readExcelData(filePath, sheetName) {
//users enna excel aahn workbook book nte object cheyyunathiloode represend cheyyunnath
    const workbook = new ExcelJS.Workbook();
//workbook akath readfile ennna function upayokich file path edkkunnu
    await workbook.xlsx.readFile(filePath);
//get worksheet enna function upayokich sheet edkunu
    const worksheet = workbook.getWorksheet(sheetName);
//const data empty aya array create cheyyunnathan,excel akathe edkunna data ne store cheyyanulla array
    const data = [];
//eethoru excel worksheetle onnamethe row  header akum,onnamathe  row de values edkkum
    const headers = worksheet.getRow(1).values;
//aa worksheet n akthathe oro rownnim one by one ayitt process cheyyam pokan ,athyamathe rwyil first user secnd row second user details etc

    worksheet.eachRow((row, rowNumber) => {
//row yude number 1 eqaul ananegil  process cheyyenda avishyam venda,if loop nte condition close cheyyunnu
        if (rowNumber === 1) {
            return;
        }
//ee excel vendi empty javascript object create cheyyunnu,ivde keyvalue pair ayittan data store cheyyan vendi
        const rowData = {};
//oro cellne process cheyyan vendi for each loop aayn create cheyythath 
        row.values.forEach((value, index) => {
//excel header
            rowData[headers[index]] = value;

        });
//ee kittuna data ne prodata enna create chtha end loot data push cheyyunnu
        data.push(rowData);
    });
//push cheytha data retutern
    return data;
}

module.exports = { readExcelData };