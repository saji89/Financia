$(document).ready(function(){
		$('#grid').jqGrid({
			url	: 'financialperiod/getall?format=xml',
			editurl : 'financialperiod/edit',
			caption:"Financial Period List",
			colNames : [ "ID" , "Code","Name","From Date", "To Date", "Remarks"],
			pager : '#pager',
			autowidth:true,
			multiselect:true,
			rowList : [ 10,20,30],
			viewrecords : true,
			rowNum : 10,
			colModel : [
			            {
			            	name  : "id",
			            	index : "id",
			            	hidden : true
			            },
			            {
			            	name : "code",
			            	index : "code",
			            	editable:true,
			            	searchoptions : { sopt : ['eq'] }
			            },
			            {
			            	name : "name",
			            	index : "name",
			            	editable : true,
			            	searchoptions : { sopt : ['eq'] }
			            },
			            {
			            	name : "fdate",
			            	index : "fdate",
			            	editable : true,
			            	searchoptions : { sopt : ['eq'] }
			            },
			            {
			            	name : "tdate",
			            	index : "tdate",
			            	editable : true,
			            	searchoptions : { sopt : ['eq'] }
			            },
			            {
			            	name : "remarks",
			            	index : "remarks",
			            	editable : true,
			            	searchoptions : { sopt : ['eq'] }
			            }
			      ]
		});
		$('#grid').navGrid('#pager');
	
	}
);
		