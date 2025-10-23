import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '50px 70px',
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
    fontSize: 12,
    lineHeight: 1.5,
  },
  heading: {
    marginBottom: 20,
    fontSize: 15,
  },
  headingCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    textDecoration: 'underline',
  },
  centerText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  startText: {
    textAlign: 'left',
    marginBottom: 10,
  },
  endText: {
    textAlign: 'right',
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 6,
    textAlign: 'justify',
    fontSize: 10,
    lineHeight: 1.5,
    wordSpacing: 10,
    fontFamily: 'Times-Roman',
  },
  justifiedText: {
    marginVertical: 10,
    textAlign: 'justify',
  },
  item: {
    fontSize: 10,
    lineHeight: 1.2,
  },
  itemGroup: {},
  subItemGroup: {
    marginLeft: 15,
  },
  subItem: {
    fontSize: 10,
  },
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  signatureBox: {
    width: '48%',
  },
  alignRight: {
    textAlign: 'right',
  },
  coverPage: {
    fontSize: 12,
    fontFamily: 'Times-Roman',
    textAlign: 'right',
    paddingTop: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  caseNo: {
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  against: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  partyLine: {
    fontSize: 12,
    marginBottom: 3,
  },
  rightAligned: {
    textAlign: 'right',
    fontSize: 12,
    marginBottom: 20,
  },
  groundsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 3,
  },
  groundLine: {
    fontSize: 11,
    marginVertical: 5,
  },
  headingAlt: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  leftText: {
    textAlign: 'left',
    fontSize: 12,
  },
  rightText: {
    textAlign: 'right',
    fontSize: 12,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  evenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  end: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 4,
    fontSize: 11,
  },
  headerRow: {
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginTop: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 10,
  },
  tableCol: {
    width: '45%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 5,
  },
  cell1: { width: '8%' },
  cell2: { width: '32%', paddingRight: 4 },
  cell3: { width: '15%' },
  cell4: { width: '25%' },
  cell5: { width: '20%' },
  col1: { width: '12%', textAlign: 'center' },
  col2: { width: '13%', textAlign: 'center' },
  col3: { width: '23%', textAlign: 'center' },
  col4: { width: '18%', textAlign: 'center' },
  col5: { width: '22%', textAlign: 'center' },
  col6: { width: '11%', textAlign: 'center' },
  annexurecol1: { width: '10%' },
  annexurecol2: { width: '15%' },
  annexurecol3: { width: '40%' },
  annexurecol4: { width: '17.5%' },
  annexurecol5: { width: '17.5%' },
  colLeft: {
    width: '60%',
    textAlign: 'center',
  },
  colRight: {
    width: '40%',
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: 10,
  },
  officeUseBlock: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 15,
  },
  battaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  rightLane:{
    width: '41%'
  }
});

export default styles;