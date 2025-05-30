import { PDFDownloadLink } from "@react-pdf/renderer";
import TicketPDF from "./TicketPDF";

export default function DownloadTicket({ reservation, train }) {
  return (
    <PDFDownloadLink
      document={<TicketPDF reservation={reservation} train={train} />}
      fileName={`ticket-${reservation.id}.pdf`}
      className="cursor-pointer rounded-md bg-cyan-600 px-6 py-2 text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
    >
      {({ loading }) => (loading ? "Preparing ticket..." : "Download Ticket")}
    </PDFDownloadLink>
  );
}
