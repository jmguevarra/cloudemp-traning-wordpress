declare global {
    interface WPData {
      apiUrl: string;
      siteUrl: string;
      nonce: string;
      currentPageId: number;
    }
  
    // Declare WPData as a global variable
    const WPData: WPData;
  }
  
  export {};
  