# Index
<ul>
  {% for file in site.pages %}
    {% if file.path contains page.dir %}
      {% if file.name != "index.md" %}
        <li><a href="{{ file.path | remove: '.md'}}">{{ file.name | remove: '.md' }}</a></li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>

{{ page.dir }}


<ul>
  {% for file in site.pages %}
    <li>{{ file.name }}, {{ file.path }}</li>
  {% endfor %}
</ul>
