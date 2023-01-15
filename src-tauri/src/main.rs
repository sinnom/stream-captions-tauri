#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use rodio::{source::Source, Decoder, OutputStream};
use std::fs::File;
use std::io::BufReader;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn sound(sound_file: &str) {
    println!("{}! Sound bytes", sound_file);
    // Get a output stream handle to the default physical sound device
    let (_stream, stream_handle) = OutputStream::try_default().unwrap();
    // Load a sound from a file, using a path relative to Cargo.toml
    let file = BufReader::new(File::open("..".to_string() + sound_file).unwrap());
    // Decode that sound file into a source
    let source = Decoder::new(file).unwrap();
    // Play the sound directly on the device
    stream_handle.play_raw(source.convert_samples());

    // The sound plays in a separate audio thread,
    // so we need to keep the main thread alive while it's playing.
    std::thread::sleep(std::time::Duration::from_millis(100));
}

fn main() {
    println!("running");
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![sound])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
