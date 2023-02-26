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
    {% if file.path contains '/blog/' %}
    <tr>
      <td><a href="{{ file.path }}">{{ file.basename }}</a></td>
      <td>{{ file.modified_time | date_to_string }}</td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
