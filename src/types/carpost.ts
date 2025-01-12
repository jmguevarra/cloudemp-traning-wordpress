export interface CarPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    featured_media: number;
    template: string;
    meta: {
      _acf_changed: boolean;
    };
    class_list: string[];
    acf: {
      specifications: {
        price: number;
        color: string;
        engine_size: string;
        no_of_seats: number;
        year_of_manufacture: string;
      };
      promos: {
        on_sale: boolean;
        discount: number;
      };
      car_post_options: {
        is_featured: boolean;
      };
    };
    car_gallery_image_field: string[];
    _links: {
      self: Array<{
        href: string;
        targetHints: {
          allow: string[];
        };
      }>;
      collection: Array<{
        href: string;
      }>;
      about: Array<{
        href: string;
      }>;
      "wp:featuredmedia": Array<{
        embeddable: boolean;
        href: string;
      }>;
      "wp:attachment": Array<{
        href: string;
      }>;
      curies: Array<{
        name: string;
        href: string;
        templated: boolean;
      }>;
    };
}
  