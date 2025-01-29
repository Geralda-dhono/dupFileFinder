use std::collections::HashMap;
use std::fs;
use std::io::{self, Read};
use std::path::{Path, PathBuf};
use std::hash::{Hasher, BuildHasherDefault};
use std::collections::hash_map::DefaultHasher;

/// Reads the content of a file and returns its hash.
fn hash_file(path: &Path) -> io::Result<u64> {
    let mut file = fs::File::open(path)?;
    let mut hasher = DefaultHasher::new();
    let mut buffer = [0; 1024]

    loop {
        let n = file.read(&mut buffer)?;
        if n == 0 { break; }
        hasher.write(&buffer[..n]);
    }

    Ok(hasher.finish())
}

/// Recursively collects file paths in a directory.
fn collect_files(dir: &Path) -> io::Result<Vec<PathBuf>> {
    let mut files = Vec::new();
    for entry in fs::read_dir(dir)? {
        let entry = entry?;
        let path = entry.path();

        if path.is_dir() {
            files.extend(collect_files(&path)?);
        } else if path.is_file() {
            files.push(path);
        }
    }
    Ok(files)
}

/// Finds and prints duplicate files in a directory.
fn find_duplicates(directory: &Path) -> io::Result<()> {
    let mut file_hashes: HashMap<u64, Vec<PathBuf>> = HashMap::new();

    // Collect all files.
    let files = collect_files(directory)?;

    // Hash files and group by hash.
    for file in files {
        if let Ok(hash) = hash_file(&file) {
            file_hashes.entry(hash).or_default().push(file);
        }
    }

    // Print duplicates.
    println!("Duplicate Files Found:");
    for (_, paths) in file_hashes {
        if paths.len() > 1 {
            println!("---------------------");
            for path in &paths {
                println!("{}", path.display());
            }
        }
    }

    Ok(())
}

fn main() {
    let directory = std::env::args().nth(1).expect("Please provide a directory path.");
    let path = Path::new(&directory);

    if !path.is_dir() {
 use std::collections::HashMap;
use std::fs;
use std::io::{self, Read};
use std::path::{Path, PathBuf};
use std::hash::{Hasher, BuildHasherDefault};
use std::collections::hash_map::DefaultHasher;

/// Reads the content of a file and returns its hash.
fn hash_file(path: &Path) -> io::Result<u64> {
    let mut file = fs::File::open(path)?;
    let mut hasher = DefaultHasher::new();
    let mut buffer = [0; 1024];

    loop {
        let n = file.read(&mut buffer)?;
        if n == 0 { break; }
        hasher.write(&buffer[..n]);
    }

    Ok(hasher.finish())
}

/// Recursively collects file paths in a directory.
fn collect_files(dir: &Path) -> io::Result<Vec<PathBuf>> {
    let mut files = Vec::new();
    for entry in fs::read_dir(dir)? {
        let entry = entry?;
        let path = entry.path();

        if path.is_dir() {
            files.extend(collect_files(&path)?);
        } else if path.is_file() {
            files.push(path);
        }
    }
    Ok(files)
}

/// Finds and prints duplicate files in a directory.
fn find_duplicates(directory: &Path) -> io::Result<()> {
    let mut file_hashes: HashMap<u64, Vec<PathBuf>> = HashMap::new();

    // Collect all files.
    let files = collect_files(directory)?;

    // Hash files and group by hash.
    for file in files {
        if let Ok(hash) = hash_file(&file) {
            file_hashes.entry(hash).or_default().push(file);
        }
    }

    // Print duplicates.
    println!("Duplicate Files Found:");
    for (_, paths) in file_hashes {
        if paths.len() > 1 {
            println!("---------------------");
            for path in &paths {
                println!("{}", path.display());
            }
        }
    }

    Ok(())
}

fn main() {
    let directory = std::env::args().nth(1).expect("Please provide a directory path.");
    let path = Path::new(&directory);

    if !path.is_dir() {
        eprintln!("Error: '{}' is not a directory.", directory);
        return;
    }

    if let Err(e) = find_duplicates(path) {
        eprintln!("Error: {}", e);
    }
}
use std::collections::HashMap;
use std::fs;
use std::io::{self, Read};
use std::path::{Path, PathBuf};
use std::hash::{Hasher, BuildHasherDefault};
use std::collections::hash_map::DefaultHasher;

/// Reads the content of a file and returns its hash.
fn hash_file(path: &Path) -> io::Result<u64> {
    let mut file = fs::File::open(path)?;
    let mut hasher = DefaultHasher::new();
    let mut buffer = [0; 1024];

    loop {
        let n = file.read(&mut buffer)?;
        if n == 0 { break; }
        hasher.write(&buffer[..n]);
    }

    Ok(hasher.finish())
}

/// Recursively collects file paths in a directory.
fn collect_files(dir: &Path) -> io::Result<Vec<PathBuf>> {
    let mut files = Vec::new();
    for entry in fs::read_dir(dir)? {
        let entry = entry?;
        let path = entry.path();

        if path.is_dir() {
            files.extend(collect_files(&path)?);
        } else if path.is_file() {
            files.push(path);
        }
    }
    Ok(files)
}

/// Finds and prints duplicate files in a directory.
fn find_duplicates(directory: &Path) -> io::Result<()> {
    let mut file_hashes: HashMap<u64, Vec<PathBuf>> = HashMap::new();

    // Collect all files.
    let files = collect_files(directory)?;

    // Hash files and group by hash.
    for file in files {
        if let Ok(hash) = hash_file(&file) {
            file_hashes.entry(hash).or_default().push(file);
        }
    }

    // Print duplicates.
    println!("Duplicate Files Found:");
    for (_, paths) in file_hashes {
        if paths.len() > 1 {
            println!("---------------------");
            for path in &paths {
                println!("{}", path.display());
            }
        }
    }

    Ok(())
}

fn main() {
    let directory = std::env::args().nth(1).expect("Please provide a directory path.");
    let path = Path::new(&directory);

    if !path.is_dir() {
        eprintln!("Error: '{}' is not a directory.", directory);
        return;
    }

    if let Err(e) = find_duplicates(path) {
        eprintln!("Error: {}", e);
    }
}
       eprintln!("Error: '{}' is not a directory.", directory);
        return;
    }

    if let Err(e) = find_duplicates(path) {
        eprintln!("Error: {}", e);
    }
}
