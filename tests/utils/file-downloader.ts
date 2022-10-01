import axios from "axios";
const DefaultDownloadPath = `${process.env.PDF_GENERATOR_URL}`;

export class FileDownloader {
  public static async checkPDFValues(
    token: string,
    SpecimenID: string,
    testResultID: string,
    testResult: string
  ): Promise<boolean> {
    const pdfContent = await FileDownloader.accessPDF(token);
    return (
      pdfContent.includes(SpecimenID) &&
      pdfContent.includes(testResultID) &&
      pdfContent.includes(testResult)
    );
  }

  public static async accessPDF(token: string): Promise<string> {
    const urlToPDF = DefaultDownloadPath + token;
    const result = await axios.get(urlToPDF);
    return result.data.toString();
  }
}
