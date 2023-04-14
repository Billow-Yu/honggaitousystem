package com.dao;

import com.entity.DiscussliwushangchengEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscussliwushangchengVO;
import com.entity.view.DiscussliwushangchengView;



public interface DiscussliwushangchengDao extends BaseMapper<DiscussliwushangchengEntity> {
	
	List<DiscussliwushangchengVO> selectListVO(@Param("ew") Wrapper<DiscussliwushangchengEntity> wrapper);
	
	DiscussliwushangchengVO selectVO(@Param("ew") Wrapper<DiscussliwushangchengEntity> wrapper);
	
	List<DiscussliwushangchengView> selectListView(@Param("ew") Wrapper<DiscussliwushangchengEntity> wrapper);

	List<DiscussliwushangchengView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussliwushangchengEntity> wrapper);
	
	DiscussliwushangchengView selectView(@Param("ew") Wrapper<DiscussliwushangchengEntity> wrapper);
	

}
