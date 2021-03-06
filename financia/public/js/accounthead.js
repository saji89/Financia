
function setParent(){
    $parent_id = $('#grid').getGridParam("selrow");
    if($('#action').val()=="add")
            $('#parent_id').val($parent_id);
}

$(document).ready(
		function () {
			$('#grid').jqGrid({
					url	: "/fas/accounthead/getall/format/xml",
					editurl : "/fas/accounthead/edit",
					treeGrid : true,
					treeGridModel : 'adjacency',
					ExpandColumn : 'code',
					caption : "Accounthead List",
					height:'auto',
					datatype:'xml',
					mtype:'post',
					colNames : ["ID","Code","Name","Parent Account","Remarks","Action"],
					autowidth:true,
					pager : '#pager',
					colModel : [
					            {
					            	name:"id",
					            	index:"id",
					            	hidden:true
					            },
					            {
					            	name:"code",
					            	index:"Code",
					            	editable : true      		
					            },
					            {
					            	name:"name",
					            	index:"Name",
					            	editable : true
					            },
					            {
					            	name:"parent_id",
					            	index:"parent_id",
					            	editable : true,
					            	hidden : true,
					            	edittype:'select',
					            	editoptions:{
					            		dataUrl : '/fas/accounthead/parent',
					            		loadComplete : function ( data){
					            					setTimeout('setParent()',100);
					            			}
					            	},
					            	editrules : {
					            		edithidden : true
					            	}
					            },
					            {
					            	name:"remarks",
					            	index:"remarks",
					            	editable : true
					            },
					            {
					            	name:"action",
					            	index:"action",
					            	editable : true,
					            	hidden:true
					            	
					            }
					        ]
					}
			);
			
			$('#grid').navGrid('#pager',
					{
						edit:true,
						add:true,
						del:true,
						view:true
					},
					{
						width:'340',
						recreateForm:true,
						afterShowForm:function(){
							$('#action').val("edit");
						},
						afterComplete : function(){
							$('#grid').trigger('reloadGrid');
						}
					
					},
					{
						width:'340',
						recreateForm:true,
						afterShowForm : function() {
							$('#action').val("add");
						},
						afterComplete : function(){
							$('#grid').trigger('reloadGrid');
						}
					},
					{
						afterComplete : function(){
							$('#grid').trigger('reloadGrid');
						}						
					}
			
			);
		}
);