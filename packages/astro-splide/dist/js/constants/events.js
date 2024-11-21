import { EVENT_ACTIVE, EVENT_ARROWS_MOUNTED, EVENT_ARROWS_UPDATED, EVENT_AUTOPLAY_PAUSE, EVENT_AUTOPLAY_PLAY, EVENT_AUTOPLAY_PLAYING, EVENT_CLICK, EVENT_DESTROY, EVENT_DRAG, EVENT_DRAGGED, EVENT_DRAGGING, EVENT_HIDDEN, EVENT_INACTIVE, EVENT_LAZYLOAD_LOADED, EVENT_MOUNTED, EVENT_MOVE, EVENT_MOVED, EVENT_NAVIGATION_MOUNTED, EVENT_PAGINATION_MOUNTED, EVENT_PAGINATION_UPDATED, EVENT_READY, EVENT_REFRESH, EVENT_RESIZE, EVENT_RESIZED, EVENT_SCROLL, EVENT_SCROLLED, EVENT_UPDATED, EVENT_VISIBLE, } from '@splidejs/splide';
export const EVENTS = [
    [EVENT_MOUNTED, 'onMounted'],
    [EVENT_READY, 'onReady'],
    [EVENT_MOVE, 'onMove'],
    [EVENT_MOVED, 'onMoved'],
    [EVENT_CLICK, 'onClick'],
    [EVENT_ACTIVE, 'onActive'],
    [EVENT_INACTIVE, 'onInactive'],
    [EVENT_VISIBLE, 'onVisible'],
    [EVENT_HIDDEN, 'onHidden'],
    [EVENT_REFRESH, 'onRefresh'],
    [EVENT_UPDATED, 'onUpdated'],
    [EVENT_RESIZE, 'onResize'],
    [EVENT_RESIZED, 'onResized'],
    [EVENT_DRAG, 'onDrag'],
    [EVENT_DRAGGING, 'onDragging'],
    [EVENT_DRAGGED, 'onDragged'],
    [EVENT_SCROLL, 'onScroll'],
    [EVENT_SCROLLED, 'onScrolled'],
    [EVENT_DESTROY, 'onDestroy'],
    [EVENT_ARROWS_MOUNTED, 'onArrowsMounted'],
    [EVENT_ARROWS_UPDATED, 'onArrowsUpdated'],
    [EVENT_PAGINATION_MOUNTED, 'onPaginationMounted'],
    [EVENT_PAGINATION_UPDATED, 'onPaginationUpdated'],
    [EVENT_NAVIGATION_MOUNTED, 'onNavigationMounted'],
    [EVENT_AUTOPLAY_PLAY, 'onAutoplayPlay'],
    [EVENT_AUTOPLAY_PLAYING, 'onAutoplayPlaying'],
    [EVENT_AUTOPLAY_PAUSE, 'onAutoplayPause'],
    [EVENT_LAZYLOAD_LOADED, 'onLazyLoadLoaded'],
];
