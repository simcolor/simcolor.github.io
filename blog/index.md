# Index
<table>
  <thead>
    <tr>
      <th>File Name</th>
      <th>Last Modified</th>
    </tr>
  </thead>
  <tbody>
    {% for page in site.pages %}
        <tr>
          <td><a href="/{{ page.path| remove: '.md' }}">{{ page.name  }}</a></td>
          <td>{{ page.last_modified_at | date_to_string }}</td>
        </tr>
    {% endfor %}
  </tbody>
</table>
