# Index
<ul>
  {% for file in site.static_files %}
    {% if file.path contains page.dir %}
      {% if file.name != "index.md" %}
        <li><a href="/{{ file.path | remove: '.md'}}">{{ file.name | remove: '.md' }}</a></li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>
