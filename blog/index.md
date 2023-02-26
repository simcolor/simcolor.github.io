# Index

<table>
  <thead>
    <tr>
      <th>File Name</th>
      <th>Last Modified</th>
    </tr>
  </thead>
  <tbody>
    {% for file in site.static_files %}
   
    <tr>
      <td><a href="{{ file.path }}">{{ file.basename }}</a></td>
      <td>{{ file.modified_time | date_to_string }}</td>
    </tr>
    
    {% endfor %}
  </tbody>
</table>
