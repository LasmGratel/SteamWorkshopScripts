// Add myworkshopfiles(subscribed items) to a collection
function addToCollection(data) {
    jQuery.ajax({
        type: "POST",
        url: 'https://steamcommunity.com/sharedfiles/addchild',
        data: data,
        success: function(response){
            console.log("Success add " + data.childid + " to " + data.id);
        }
    });
}

jQuery("#leftContents div.workshopItemSubscription")
    .each(function() {
        let id = jQuery(this).attr('id').replace('Subscription','')
        if (!id.startsWith('Unsubscribed')) {
            addToCollection({
                id: "2740040916", // collection id
                sessionid: window.g_sessionID,
                childid: id,
                activeSection: "MySubscribedItems"
            });
        }
    });