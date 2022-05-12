import BaseService from './BaseService';

export default class AIListService extends BaseService {
  constructor() {
    super('/AIList');
  }

  getAIList = async (IDT, IDG) => {
    const url = '/AIList';
    const data = {
      IDTeam: IDT,
      IDGroup: IDG,
    };
    try {
      const response = await this.httpClient.post(url, data);
      return response.data;
    } catch (error) {
      throw this.responseService(error, 'list');
    }
  };
}
