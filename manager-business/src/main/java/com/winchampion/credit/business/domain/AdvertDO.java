package com.winchampion.credit.business.domain;

import java.io.Serializable;

import com.winchampion.credit.business.domain.base.UserBaseDO;
import com.winchampion.credit.user.utils.DictUtils;



/**
 * 广告图表
 * 
 * @author zhangxin
 * @email zhangxin@champion-credit.com
 * @date 2020-02-26 11:20:23
 */
public class AdvertDO extends UserBaseDO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	//广告图名称
	private String advertName;
	//排序优先级
	private Integer sort;
	//广告图
	private String advertFile;
	//跳转链接
	private String advertHref;
	//是否发布
	private String isRelease;
	private String isReleaseDesc;

	/**
	 * 设置：广告图名称
	 */
	public void setAdvertName(String advertName) {
		this.advertName = advertName;
	}
	/**
	 * 获取：广告图名称
	 */
	public String getAdvertName() {
		return advertName;
	}
	/**
	 * 设置：排序优先级
	 */
	public void setSort(Integer sort) {
		this.sort = sort;
	}
	/**
	 * 获取：排序优先级
	 */
	public Integer getSort() {
		return sort;
	}
	/**
	 * 设置：广告图
	 */
	public void setAdvertFile(String advertFile) {
		this.advertFile = advertFile;
	}
	/**
	 * 获取：广告图
	 */
	public String getAdvertFile() {
		return advertFile;
	}
	/**
	 * 设置：跳转链接
	 */
	public void setAdvertHref(String advertHref) {
		this.advertHref = advertHref;
	}
	/**
	 * 获取：跳转链接
	 */
	public String getAdvertHref() {
		return advertHref;
	}
	/**
	 * 设置：是否发布
	 */
	public void setIsRelease(String isRelease) {
		this.isRelease = isRelease;
	}
	/**
	 * 获取：是否发布
	 */
	public String getIsRelease() {
		return isRelease;
	}
	public String getIsReleaseDesc() {
		isReleaseDesc = DictUtils.getDictLabel(isRelease, "is_release", "-");
		return isReleaseDesc;
	}
	public void setIsReleaseDesc(String isReleaseDesc) {
		this.isReleaseDesc = isReleaseDesc;
	}
	
}
