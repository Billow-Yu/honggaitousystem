package com.dao;

import com.entity.LiwushangchengEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.LiwushangchengVO;
import com.entity.view.LiwushangchengView;



public interface LiwushangchengDao extends BaseMapper<LiwushangchengEntity> {
	
	List<LiwushangchengVO> selectListVO(@Param("ew") Wrapper<LiwushangchengEntity> wrapper);
	
	LiwushangchengVO selectVO(@Param("ew") Wrapper<LiwushangchengEntity> wrapper);
	
	List<LiwushangchengView> selectListView(@Param("ew") Wrapper<LiwushangchengEntity> wrapper);

	List<LiwushangchengView> selectListView(Pagination page,@Param("ew") Wrapper<LiwushangchengEntity> wrapper);
	
	LiwushangchengView selectView(@Param("ew") Wrapper<LiwushangchengEntity> wrapper);
	

}
