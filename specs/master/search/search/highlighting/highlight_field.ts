
/**namespace:Search.Search.Highlighting */
/**custom_serialization*/
interface highlight_field {
	Field: field;
	pre_tags: string[];
	post_tags: string[];
	fragment_size: integer;
	no_match_size: integer;
	number_of_fragments: integer;
	fragment_offset: integer;
	boundary_max_size: integer;
	encoder: string;
	order: string;
	tags_schema: string;
	require_field_match: boolean;
	boundary_chars: string;
	type: HighlighterType;
	force_source: boolean;
	matched_fields: field[];
	highlight_query: query_container;
}