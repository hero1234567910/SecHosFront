import evn from '../utils/evn.js'

function model(http) {

  return {
     getInfo(data) {
      return http.post(evn.SEC_HOSAPI+'/wx/common/checkPatient',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    },
    saveEvaluate(data){
    	return http.post(evn.SEC_HOSAPI+'/wx/sys/sechosevaluate/add',data,{
      	headers:{
      		'Content-Type': 'application/json;charset=utf-8'
      	}
      });
    }
//  // 查询并绑定
//  selectPatient(data) {
//    return http.post(evn.SEC_HOSAPI+'/wx/common/checkPatient',data,{
//    	headers:{
//    		contentType:'application/json;charset=utf-8'
//    	}
//    });
//  },
//  getJzlsh(data) {
//    return http.post(evn.SEC_HOSAPI+'/wx/common/getJzlsh',data,{
//    	headers:{
//    		'Content-Type': 'application/json;charset=utf-8'
//    	}
//    });
//  },
//  getSummary(data) {
//    return http.post(evn.SEC_HOSAPI+'/wx/common/getSummary',data,{
//    	headers:{
//    		'Content-Type': 'application/json;charset=utf-8'
//    	}
//    });
//  },
//  getAdvanceDetail(data) {
//    return http.post(evn.SEC_HOSAPI+'/wx/common/getAdvanceDetail',data,{
//    	headers:{
//    		'Content-Type': 'application/json;charset=utf-8'
//    	}
//    });
//  },
  }

}

export default model