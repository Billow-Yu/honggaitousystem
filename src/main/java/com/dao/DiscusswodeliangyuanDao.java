package com.dao;

import com.entity.DiscusswodeliangyuanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscusswodeliangyuanVO;
import com.entity.view.DiscusswodeliangyuanView;


public interface DiscusswodeliangyuanDao extends BaseMapper<DiscusswodeliangyuanEntity> {
	
	List<DiscusswodeliangyuanVO> selectListVO(@Param("ew") Wrapper<DiscusswodeliangyuanEntity> wrapper);
	
	DiscusswodeliangyuanVO selectVO(@Param("ew") Wrapper<DiscusswodeliangyuanEntity> wrapper);
	
	List<DiscusswodeliangyuanView> selectListView(@Param("ew") Wrapper<DiscusswodeliangyuanEntity> wrapper);

	List<DiscusswodeliangyuanView> selectListView(Pagination page,@Param("ew") Wrapper<DiscusswodeliangyuanEntity> wrapper);
	
	DiscusswodeliangyuanView selectView(@Param("ew") Wrapper<DiscusswodeliangyuanEntity> wrapper);
	

}
