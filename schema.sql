--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: post_entity_posttype_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.post_entity_posttype_enum AS ENUM (
    'post',
    'page',
    'story',
    'series'
);


ALTER TYPE public.post_entity_posttype_enum OWNER TO postgres;

--
-- Name: post_entity_status_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.post_entity_status_enum AS ENUM (
    'draft',
    'scheduled',
    'review',
    'published'
);


ALTER TYPE public.post_entity_status_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: meta_options; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meta_options (
    id integer NOT NULL,
    "metaValue" json NOT NULL,
    "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
    "updateDate" timestamp without time zone DEFAULT now() NOT NULL,
    "postId" integer
);


ALTER TABLE public.meta_options OWNER TO postgres;

--
-- Name: meta_options_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.meta_options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.meta_options_id_seq OWNER TO postgres;

--
-- Name: meta_options_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.meta_options_id_seq OWNED BY public.meta_options.id;


--
-- Name: post_entity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.post_entity (
    id integer NOT NULL,
    title character varying(512) NOT NULL,
    "postType" public.post_entity_posttype_enum DEFAULT 'post'::public.post_entity_posttype_enum NOT NULL,
    slug character varying(255) NOT NULL,
    status public.post_entity_status_enum DEFAULT 'draft'::public.post_entity_status_enum NOT NULL,
    content text,
    schema text,
    "featuredImage" character varying(1024),
    "publishOn" timestamp without time zone,
    "metaOptionsId" integer
);


ALTER TABLE public.post_entity OWNER TO postgres;

--
-- Name: post_entity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.post_entity_id_seq OWNER TO postgres;

--
-- Name: post_entity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_entity_id_seq OWNED BY public.post_entity.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    description text,
    schema text,
    "featuredImageUrl" character varying(1024),
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone
);


ALTER TABLE public.tags OWNER TO postgres;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tags_id_seq OWNER TO postgres;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    "firstName" character varying(95) NOT NULL,
    "lastName" character varying(95),
    email character varying(95) NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: meta_options id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meta_options ALTER COLUMN id SET DEFAULT nextval('public.meta_options_id_seq'::regclass);


--
-- Name: post_entity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_entity ALTER COLUMN id SET DEFAULT nextval('public.post_entity_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Name: meta_options PK_44c169e722c4204fa9641774a14; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meta_options
    ADD CONSTRAINT "PK_44c169e722c4204fa9641774a14" PRIMARY KEY (id);


--
-- Name: post_entity PK_58a149c4e88bf49036bc4c8c79f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_entity
    ADD CONSTRAINT "PK_58a149c4e88bf49036bc4c8c79f" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: tags PK_e7dc17249a1148a1970748eda99; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY (id);


--
-- Name: meta_options UQ_4f31301436c1a10e36f48e46626; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meta_options
    ADD CONSTRAINT "UQ_4f31301436c1a10e36f48e46626" UNIQUE ("postId");


--
-- Name: post_entity UQ_6e606c5d905ee68d531a4d66a06; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_entity
    ADD CONSTRAINT "UQ_6e606c5d905ee68d531a4d66a06" UNIQUE (slug);


--
-- Name: post_entity UQ_8f1ed08647cc0e1d466cc117ac2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_entity
    ADD CONSTRAINT "UQ_8f1ed08647cc0e1d466cc117ac2" UNIQUE ("metaOptionsId");


--
-- Name: tags UQ_b3aa10c29ea4e61a830362bd25a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT "UQ_b3aa10c29ea4e61a830362bd25a" UNIQUE (slug);


--
-- Name: tags UQ_d90243459a697eadb8ad56e9092; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT "UQ_d90243459a697eadb8ad56e9092" UNIQUE (name);


--
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- Name: meta_options FK_4f31301436c1a10e36f48e46626; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meta_options
    ADD CONSTRAINT "FK_4f31301436c1a10e36f48e46626" FOREIGN KEY ("postId") REFERENCES public.post_entity(id) ON DELETE CASCADE;


--
-- Name: post_entity FK_8f1ed08647cc0e1d466cc117ac2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.post_entity
    ADD CONSTRAINT "FK_8f1ed08647cc0e1d466cc117ac2" FOREIGN KEY ("metaOptionsId") REFERENCES public.meta_options(id);


--
-- PostgreSQL database dump complete
--

