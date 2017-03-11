/**
* Call to the Fishbowl Server
*/
interface fbApiCall {
  action: string;
  params: any;
  formatValues?: (_:string) => string
}

/**
* Format of CSV response in fbApiResponse
*/
interface fbCsvResponse {
  statusCode: string;
  statusMessage?: string;
  Rows: {
    Row: any[]
  }
}

/**
* Response from the Fishbowl Server
*/
interface fbApiResponse {
  FbiXml: {
    Ticket?: {
      Key: string;
      UserID: string;
    }
    FbiMsgsRs: {
      statusCode: string;
      statusMessage?: string;
      //Different types of responses...
      ExecuteQueryRs?: fbCsvResponse,
      LoginRs?: {
        statusCode: string;
        statusMessage?: string;
      },
      CustomerSaveRs?: {
        statusCode: string;
        statusMessage?: string;
      }
    }
  }
}

/**
* Format of data going back to Restify
*/
interface fbReturnToRestify {
  err: string,
  json: any
}

interface formatOptions {
  capitalize?: boolean;
}
