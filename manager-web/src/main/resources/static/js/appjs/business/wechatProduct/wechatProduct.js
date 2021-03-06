
var prefix = "/business/wechatProduct"
$(function() {
	load();
});

function selectLoad() {
	var html = "";
	$.ajax({
		url : '/common/dict/list/product_issue_state',
		success : function(data) {
			//加载数据
			html += '<option value="" selected>全部</option>';
			for (var i = 0; i < data.length; i++) {
				html += '<option value="' + data[i].value + '" ';
				//默认设置为待受理
				/* if( data[i].value == '1'){
					html += ' selected ';
				} */
				html += '">' + data[i].name + '</option>';
			}
		
			$(".chosen-select").append(html);
			$(".chosen-select").chosen({
				maxHeight : 200
			});
		}
	});
}

function load() {
	selectLoad();
	$('#exampleTable')
			.bootstrapTable(
					{
						method : 'get', // 服务器数据的请求方式 get or post
						url : prefix + "/list", // 服务器数据的加载地址
					//	showRefresh : true,
					//	showToggle : true,
					//	showColumns : true,
						iconSize : 'outline',
						toolbar : '#exampleToolbar',
						striped : true, // 设置为true会有隔行变色效果
						dataType : "json", // 服务器返回的数据类型
						pagination : true, // 设置为true会在底部显示分页条
						// queryParamsType : "limit",
						// //设置为limit则会发送符合RESTFull格式的参数
						singleSelect : false, // 设置为true将禁止多选
						// contentType : "application/x-www-form-urlencoded",
						// //发送到服务器的数据编码类型
						pageSize : 10, // 如果设置了分页，每页数据条数
						pageNumber : 1, // 如果设置了分布，首页页码
						//search : true, // 是否显示搜索框
						showColumns : false, // 是否显示内容下拉框（选择显示的列）
						sidePagination : "server", // 设置在哪里进行分页，可选值为"client" 或者 "server"
						queryParams : function(params) {
							return {
								//说明：传入后台的参数包括offset开始索引，limit步长，sort排序列，order：desc或者,以及所有列的键值对
								limit: params.limit,
								offset:params.offset,
								productName:$('#productName').val(),
								insName:$('#insName').val(),
								isRelease:$('#isRelease').val()
							};
						},
						// //请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数，例如 toolbar 中的参数 如果
						// queryParamsType = 'limit' ,返回参数必须包含
						// limit, offset, search, sort, order 否则, 需要包含:
						// pageSize, pageNumber, searchText, sortName,
						// sortOrder.
						// 返回false将会终止请求
						columns : [
								{
									field : 'no', 
									title : '序号',
									sortable: true,
					                align: "center",
					                width: 40,
					                formatter: function (value, row, index) {
					                	return index + 1;
					                }
								},
																{
									field : 'productNo', 
									title : '产品编号' 
								},
																{
									field : 'productName', 
									title : '产品名称' ,
									formatter : function(value, row, index) {
										var e = '<a style="text-decoration:underline;" href="/business/product/details/' + row.creditProductId + '/1" mce_href="#" title="详情">' + value + '</a> ';
										return e;
									}
								},
																{
									field : 'insName', 
									title : '所属金融机构' 
								},
																{
									field : 'isReleaseCode', 
									title : '产品状态' 
								},
																{
									field : 'wechatAppid', 
									title : '小程序申请跳转appid' 
								},
																{
									field : 'wechatUrl', 
									title : '小程序申请跳转链接' 
								},
																{
									field : 'updateDate', 
									title : '最新添加或更新时间' 
								},
																{
									field : 'updateByName', 
									title : '最后添加或更新人' 
								},
																{
									title : '操作',
									field : 'id',
									align : 'center',
									formatter : function(value, row, index) {
										var e = '<a class="btn btn-primary btn-sm '+s_edit_h+'" href="#" mce_href="#" title="编辑" onclick="edit(\''
												+ row.id
												+ '\')"><i class="fa fa-edit"></i></a> ';
										var d = '<a class="btn btn-warning btn-sm '+s_remove_h+'" href="#" title="移出小程序"  mce_href="#" onclick="remove(\''
												+ row.id
												+ '\')"><i class="fa fa-remove"></i></a> ';
										var f = '<a class="btn btn-success btn-sm" href="#" title="备用"  mce_href="#" onclick="resetPwd(\''
												+ row.id
												+ '\')"><i class="fa fa-key"></i></a> ';
										return e + d ;
									}
								} ]
					});
}
function reLoad() {
	$('#exampleTable').bootstrapTable('refresh');
}
function add() {
	layer.open({
		type : 2,
		title : '增加',
		maxmin : true,
		shadeClose : false, // 点击遮罩关闭层
		area : [ '800px', '520px' ],
		content : prefix + '/add' // iframe的url
	});
}
function edit(id) {
	layer.open({
		type : 2,
		title : '编辑',
		maxmin : true,
		shadeClose : false, // 点击遮罩关闭层
		area : [ '800px', '520px' ],
		content : prefix + '/edit/' + id // iframe的url
	});
}
function remove(id) {
	layer.confirm('确定要删除选中的记录？', {
		btn : [ '确定', '取消' ]
	}, function() {
		$.ajax({
			url : prefix+"/remove",
			type : "post",
			data : {
				'id' : id
			},
			success : function(r) {
				if (r.code==0) {
					layer.msg(r.msg);
					reLoad();
				}else{
					layer.msg(r.msg);
				}
			}
		});
	})
}

function moveIn() {
	layer.open({
		type : 2,
		title : '移入产品',
		maxmin : true,
		shadeClose : false, // 点击遮罩关闭层
		area : [ '800px', '520px' ],
		content : prefix + '/moveIn' // iframe的url
	});
}
