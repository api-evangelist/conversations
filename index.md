---
layout: page
title: Conversations
---
<center>
<p class="uk-text-lead uk-text-center" style="font-size: 24px; margin-top: 35px; margin-bottom: 10px;" id="search-title">{{ site.name }} {{ page.title }}</p>
<form class="row">
    <table align="center" style="width: 250px;">
        <tr>
            <td style="width: 350px;" align="right">
                <input type="text" class="form-control" id="api-search" style="width: 250px">
            </td>                            
            <td style="width: 50px;">
                <button type="submit" class="btn btn-dark" onclick="search(); return false;">Search</button>
            </td>           
        </tr>
    </table>
    {% assign sessions = site.sessions %}
    <textarea id="search_json" rows="10" cols="100" style="display: none;">[]</textarea>
    <script>
        var sessions = [
        {% for session in sessions %} 
        {
            title: "{{ session.title }}",
            description: "{{ session.description }}",
            guestName: "{{ session.guestName }}",
            youtubeId: "{{ session.youtubeId }}",
            guestRole: "{{ session.guestRole }}",
            guestCompany: "{{ session.guestCompany }}",
            guestIndustry: "{{ session.guestIndustry }}",
            bio: "{{ session.bio }}",
            url: "{{ session.url }}",
            conversation: {{ session.conversation | jsonify }}
        }{% unless forloop.last %},{% endunless %}
        {% endfor %} 
        ];
        document.getElementById('search_json').value = JSON.stringify(sessions);
    </script>    
</form>
</center>
<table align="center" style="width: 50%; border: 1px solid #FFF;" class="table table-hover" id="search-results"></table>    
<p align="center"><a href="/questions/"><strong>Submit Your Questions for Your Conversation</strong></a></p>
<script>
    function search(){
        
        document.getElementById('search-results').innerHTML = "";
        var search = document.getElementById('api-search').value;
        var sessions = JSON.parse(document.getElementById('search_json').value);

        var search_results = [];

        for (let i = 0; i < sessions.length; i++) {
        
            var match = 0;
            match += sessions[i].title.includes(search);
            match += sessions[i].description.includes(search);
            match += sessions[i].guestName.includes(search);
            match += sessions[i].guestRole.includes(search);
            match += sessions[i].guestCompany.includes(search);
            match += sessions[i].guestIndustry.includes(search);
            match += sessions[i].bio.includes(search);

            for (let j = 0; j < sessions[i].conversation.length; j++) {
                match += sessions[i].conversation[j].question.includes(search);
                match += sessions[i].conversation[j].answer.includes(search);
            }

            console.log(sessions[i].title + ' = ' + match);  

            if(match > 0){
                var s = {};
                s.match = match;
                s.title = sessions[i].title;
                s.description = sessions[i].description;
                s.youtubeId = sessions[i].youtubeId;
                s.url = sessions[i].url;
                search_results.push(s)
            }
        }    

        //console.log(search_results);
        search_results.sort(function(a, b) {
        if (a.match < b.match) return 1;
        if (a.match > b.match) return -1;
        return 0;
        });        

        var html = '';
        if(search_results.length > 0){
            for (let i = 0; i < search_results.length; i++) {
                //console.log(search_results[i]);
                html += '<tr>';
                html += '<td align="center">';
                html += '<a href="' + search_results[i].url + '"><img src="https://i.ytimg.com/vi/' + search_results[i].youtubeId + '/hqdefault.jpg" width="100" style="margin: 15px;" /></a>';
                html += '</td>';
                html += '<td valign="top" style="padding: 30px">';
                html += '<strong>' + search_results[i].title + '</strong> - ' + search_results[i].description;
                html += '</td>';
                html += '<td width="15%" align="center"><br>';
                html += '<a href="' + search_results[i].url + '">';
                html += '<button type="button" class="btn btn-dark">More Info</button>';
                html += '</a>';
                html += '</td>';
                html += '</tr>';          
            }  
        }  
        else{
                html += '<tr>';
                html += '<td align="center">';
                html += '<img src="https://s3.amazonaws.com/kinlane-productions2/api-evangelist-logos/api-evangelist-red-seal.png" width="100" style="margin: 15px;" />';
                html += '</td>';
                html += '</tr>'; 
                html += '<tr>';
                html += '<td valign="top" style="padding: 30px" align="center">';
                html += '<strong>No Results</strong> - There was no results for your search, try again.';
                html += '</td>';
                html += '</tr>'; 
        }

        document.getElementById('search-results').innerHTML = html;

    }
</script>