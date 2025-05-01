import jsPDF from "jspdf";
import { newData } from "../data/newData.js";

const DownloadTextFile = () => {
  const handleDownload = () => {
    const doc = new jsPDF();
    const lineHeight = 10;
    const marginTop = 10;
    const marginLeft = 10;
    const pageHeight = doc.internal.pageSize.height;
    let y = marginTop;

    newData.forEach((train) => {
      const line = `train NO. ${train.number} Departs from ${train.trainFrom} to ${train.trainTo}. Departure time: ${train.go}, arrival time: ${train.arrive}, with a travel duration of ${train.time.replaceAll(":00", "")} hours. It operates at a speed of ${train.speed} km/h, classified as ${train.level}, and stops at ${train.stopin} stations during the journey.`;
      const maxLineWidth = doc.internal.pageSize.width - 20; // 10px margin on both sides
      const lines = doc.splitTextToSize(line, maxLineWidth);

      lines.forEach((line) => {
        if (y + lineHeight > pageHeight - marginTop) {
          doc.addPage();
          y = marginTop;
        }

        doc.text(line, marginLeft, y);
        y += lineHeight;
      });

      y += lineHeight;
    });
    // const text = formatted.join("\n");

    // const blob = new Blob([text], { type: "text/plain" });
    // const link = document.createElement("a");
    // link.href = URL.createObjectURL(blob);
    // link.download = "output.txt";
    // link.click();
    // URL.revokeObjectURL(link.href);

    // formatted.forEach((line, index) => {
    //   doc.text(line, 10, 10 + index * 10); // x=10, y=10 + spacing
    // });

    doc.save("data.pdf");
  };

  return <button onClick={handleDownload}>Download Formatted Text</button>;
};

export default DownloadTextFile;
