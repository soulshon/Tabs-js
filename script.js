const tabsBtn = document.querySelectorAll(".btn-nav");
const tabsItems = document.querySelectorAll(".item");
onTabClick();
function onTabClick(item){
	tabsBtn.forEach((item)=>{
	item.addEventListener("click",() =>{
	let currentBtn = item;
	let tabId = currentBtn.getAttribute('data-tag');
	let currentTab = document.querySelector(tabId);
	//console.dir(currentBtn);
	if(! currentBtn.classList.contains('active')){
		   tabsBtn.forEach((item)=>{
			item.classList.remove('active');
		});
	tabsItems.forEach((item)=>{
			item.classList.remove('active');
		});
		currentBtn.classList.add('active');
		currentTab.classList.add('active');
		};
	});
	
});
}
document.querySelector('.btn-nav').click();
