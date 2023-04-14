package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.DiscussliwushangchengEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.DiscussliwushangchengVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.DiscussliwushangchengView;


/**
 * 礼物商城评论表
 *
 */
public interface DiscussliwushangchengService extends IService<DiscussliwushangchengEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiscussliwushangchengVO> selectListVO(Wrapper<DiscussliwushangchengEntity> wrapper);
   	
   	DiscussliwushangchengVO selectVO(@Param("ew") Wrapper<DiscussliwushangchengEntity> wrapper);
   	
   	List<DiscussliwushangchengView> selectListView(Wrapper<DiscussliwushangchengEntity> wrapper);
   	
   	DiscussliwushangchengView selectView(@Param("ew") Wrapper<DiscussliwushangchengEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiscussliwushangchengEntity> wrapper);
   	

}
