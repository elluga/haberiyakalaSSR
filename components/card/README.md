## Card Component

One of the layout component.

#### props

- **_`id`_**: string,
  - Cards id
- **_`bg`_**: string
  - A custom background hex color
- **_`className`_** : string
  - A Custom classname
- **_`loading`_** : bool
  - Card loading state
- **_`children`_** : node
  - Sub Components of the Card such as `Card.IMG` and `Card.Title`

### Card.IMG

a representation of image of the card

#### props

- **_`src`_**: string
  - Specifies the URL of an image
- **_`alt`_**: string
  - Specifies an alternate text for an image
- **_`longdesc`_**: string
  - Specifies a URL to a detailed description of an image (`longdesc`)
- **_`className`_**: string
  - Specifies the width of an image
- **_`border`_**: string
  - border color of the image placed at below of the image

### Card.Title

Respresents a title of the news

####props

- **_`title`_**: string
  - A title text of news
- **_`color`_**: string
  - custom hex color
- **_`fontSize`_**: string
  - If you want to override font size that come from `type` prop use this
- **_`className`_**: string
  - For custom styling
- **_`type`_**: string
  - changes its styles regarding this props

### Usage

```javascript
import Card from "@comp/card/";

<Card id="unique_id" bg="#ffffff">
  <Card.IMG
    src="http://cdn.haberiyakala.com/assets/uploads/images/content/2019/01/23/cropped_content_enflasyon-2019da-15e-inecek_yB38C62IrIsvF37.jpg"
    longdesc="Enflasyon haberi"
    alt="Enflasyon haberi"
    className="card-img"
    border="#ffa200"
  />
  <Card.Title
    title="Merkez Bankası'ndan Hükümete Açık Metkup"
    color="#efefef"
    fontSize="24"
    type="cardTitle"
  />
</Card>;
```