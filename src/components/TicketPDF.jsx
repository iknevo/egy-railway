import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { format } from "date-fns";
import QRCode from "qrcode";
import { formatToEGP } from "../utils/helpers";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 0,
  },
  ticketContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#0891b2",
    padding: 30,
    color: "#ffffff",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    alignItems: "flex-end",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.9,
  },
  ticketNumber: {
    fontSize: 14,
    opacity: 0.9,
  },
  mainContent: {
    padding: 30,
  },
  qrSection: {
    flexDirection: "row",
    marginBottom: 30,
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    padding: 20,
  },
  qrContainer: {
    flex: 1,
    alignItems: "center",
  },
  qrCode: {
    width: 120,
    height: 120,
  },
  qrLabel: {
    marginTop: 10,
    fontSize: 12,
    color: "#0891b2",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  passengerInfo: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: "center",
  },
  passengerName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#1e293b",
  },
  passengerDetails: {
    fontSize: 12,
    color: "#64748b",
  },
  journeySection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0891b2",
    marginBottom: 15,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  journeyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  journeyItem: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: "#f8fafc",
    padding: 15,
    borderRadius: 8,
  },
  journeyLabel: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 5,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  journeyValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
  },
  footer: {
    backgroundColor: "#f8fafc",
    padding: 20,
    borderTop: "1px solid #e2e8f0",
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#64748b",
  },
  footerPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0891b2",
  },
});

export default function TicketPDF({ reservation, train }) {
  const qrValue = JSON.stringify({
    reservationId: reservation.id,
    passengerName: `${reservation.firstName} ${reservation.lastName}`,
    trainId: train.id,
    date: reservation.date,
  });

  const qrCodeDataUrl = QRCode.toDataURL(qrValue, {
    width: 120,
    margin: 1,
    color: {
      dark: "#0891b2",
      light: "#ffffff",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.ticketContainer}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <View style={styles.headerLeft}>
                <Text style={styles.title}>EgyRailway</Text>
                <Text style={styles.subtitle}>Electronic Travel Document</Text>
              </View>
              <View style={styles.headerRight}>
                <Text style={styles.ticketNumber}>
                  Ticket #{reservation.id}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.mainContent}>
            <View style={styles.qrSection}>
              <View style={styles.qrContainer}>
                <Image src={qrCodeDataUrl} style={styles.qrCode} />
                <Text style={styles.qrLabel}>Scan at station</Text>
              </View>
              <View style={styles.passengerInfo}>
                <Text style={styles.passengerName}>
                  {reservation.firstName} {reservation.lastName}
                </Text>
                <Text style={styles.passengerDetails}>{reservation.phone}</Text>
              </View>
            </View>

            <View style={styles.journeySection}>
              <Text style={styles.sectionTitle}>Journey Details</Text>
              <View style={styles.journeyGrid}>
                <View style={styles.journeyItem}>
                  <Text style={styles.journeyLabel}>Train</Text>
                  <Text style={styles.journeyValue}>
                    {train.number} ({train.level})
                  </Text>
                </View>

                <View style={styles.journeyItem}>
                  <Text style={styles.journeyLabel}>Date</Text>
                  <Text style={styles.journeyValue}>
                    {format(new Date(reservation.date), "EEE, MMM dd yyyy")}
                  </Text>
                </View>
                <View style={styles.journeyItem}>
                  <Text style={styles.journeyLabel}>From</Text>
                  <Text style={styles.journeyValue}>{train.trainFrom}</Text>
                </View>
                <View style={styles.journeyItem}>
                  <Text style={styles.journeyLabel}>To</Text>
                  <Text style={styles.journeyValue}>{train.trainTo}</Text>
                </View>
                <View style={styles.journeyItem}>
                  <Text style={styles.journeyLabel}>Time</Text>
                  <Text style={styles.journeyValue}>
                    {train.go} - {train.arrive}
                  </Text>
                </View>
                <View style={styles.journeyItem}>
                  <Text style={styles.journeyLabel}>Duration</Text>
                  <Text style={styles.journeyValue}>
                    {train.time.replace(":00", "")} Hours
                  </Text>
                </View>
                <View style={styles.journeyItem}>
                  <Text style={styles.journeyLabel}>Passengers</Text>
                  <Text style={styles.journeyValue}>
                    {reservation.numPassengers}
                  </Text>
                </View>
                <View style={styles.journeyItem}>
                  <Text style={styles.journeyLabel}>Booked On</Text>
                  <Text style={styles.journeyValue}>
                    {format(
                      new Date(reservation.created_at),
                      "EEE, MMM dd yyyy",
                    )}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <View style={styles.footerContent}>
              <Text style={styles.footerText}>
                Please present this ticket at the station
              </Text>
              <Text style={styles.footerPrice}>
                {formatToEGP(reservation.totalPrice)}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
