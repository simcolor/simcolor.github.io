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
      {% if page.path contains './' and page.path contains '.md' %}
        <tr>
          <td><a href="{{ page.path }}">{{ page.name | replace: '.md', '' }}</a></td>
          <td>{{ page.last_modified_at | date_to_string }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
